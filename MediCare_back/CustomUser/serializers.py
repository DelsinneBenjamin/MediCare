from django.contrib.auth import authenticate
from rest_framework import serializers
from .models import CustomUser, Doctor, Patient
from .user_service import create_user_with_profile


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

    def update(self, instance, validated_data):
        instance.email = validated_data.get('email', instance.email)
        instance.save()
        return instance


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
        return create_user_with_profile(validated_data)



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
