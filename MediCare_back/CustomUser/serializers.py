from rest_framework import serializers
from django.contrib.auth import authenticate
from CustomUser.models import CustomUser, Doctor, Patient

from rest_framework import serializers
from .models import CustomUser, Doctor, Patient


class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ['speciality', 'inami_number']


class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ['nationnal_number']


class UserSerializer(serializers.ModelSerializer):
    doctor = DoctorSerializer(required=False)
    patient = PatientSerializer(required=False)

    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'role', 'doctor', 'patient')

    #Méthode du serializer DRF qui controle comment l'objet est converti en JSON lorsqu'il renvoie la réponse
    #Je l'utilise pour modifier ce que le JSON renvoie en fonction du role (je ne veux pas renvoyer les deux profils.. juste un)
    def to_representation(self, instance):
        data = super().to_representation(instance)
        if instance.role == 'doctor':
            data['doctor'] = DoctorSerializer(instance.doctor).data
            data.pop('patient', None)
        elif instance.role == 'patient':
            data['patient'] = PatientSerializer(instance.patient).data
            data.pop('doctor', None)
        return data


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    doctor = DoctorSerializer(required=False)
    patient = PatientSerializer(required=False)

    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'password', 'role', 'doctor', 'patient')

    def validate(self, data):
        role = data.get('role')
        if role not in ['doctor', 'patient']:
            raise serializers.ValidationError('Un rôle valide est obligatoire (doctor ou patient).')

        # On récupère le profil correspondant et on supprime l'autre
        if role == 'doctor':
            profile_data = data.pop('doctor', None)
            data.pop('patient', None)  # supprime si présent
            required_fields = ['speciality', 'inami_number']
        else:
            profile_data = data.pop('patient', None)
            data.pop('doctor', None)  # supprime si présent
            required_fields = ['nationnal_number']

        if not profile_data:
            raise serializers.ValidationError({role: f"Les informations du profil {role} sont requises."})

        for field in required_fields:
            if field not in profile_data or not profile_data[field]:
                raise serializers.ValidationError({role: f'Le champ "{field}" est obligatoire.'})

        # On met le profil dans validated_data pour create()
        data['profile_data'] = profile_data
        data['role'] = role
        return data

    def create(self, validated_data):
        password = validated_data.pop('password')
        profile_data = validated_data.pop('profile_data')
        role = validated_data.pop('role')

        # Créer le user
        user = CustomUser(**validated_data, role=role)
        user.set_password(password)
        user.save()

        # Créer le profil correspondant
        if role == 'doctor':
            Doctor.objects.create(user=user, **profile_data)
        else:
            Patient.objects.create(user=user, **profile_data)

        return user



class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get("email")
        password = data.get("password")

        user = authenticate(email=email, password=password)
        if not user:
            raise serializers.ValidationError("Identifiants invalides.")

        data["user"] = user
        return data

class LinkPatientDoctorSerializer(serializers.Serializer):
    patient_id = serializers.IntegerField()
    doctor_id = serializers.IntegerField()

    def validate(self, data):
        patient_id = data.get('patient_id')
        doctor_id = data.get('doctor_id')

        try:
            patient = Patient.objects.get(user_id=patient_id)
        except Patient.DoesNotExist:
            raise serializers.ValidationError({'patient_id': 'Patient non trouvé.'})

        try:
            doctor = Doctor.objects.get(user_id=doctor_id)
        except Doctor.DoesNotExist:
            raise serializers.ValidationError({'doctor_id': 'Doctor non trouvé.'})

        data['patient'] = patient
        data['doctor'] = doctor
        return data

    def create(self, validated_data):
        patient = validated_data['patient']
        doctor = validated_data['doctor']

        # Ajouter le patient au docteur (relation ManyToMany)
        doctor.patients.add(patient)
        doctor.save()

        return {
            'message': f'Patient {patient.user.get_full_name()} lié au Docteur {doctor.user.get_full_name()}.'
        }