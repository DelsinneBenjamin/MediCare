from rest_framework import serializers
from CustomUser.models import CustomUser, Doctor, Patient  # <-- à adapter selon ton projet

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ['speciality', 'inami_number']

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ['nationnal_number']


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    doctor = DoctorSerializer(required=False)
    patient = PatientSerializer(required=False)

    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'password', 'phone', 'role', 'doctor', 'patient')

    def validate(self, data ):
        role = data.get('role')
        profile_data = data.get(role)

        if role not in ['admin', 'doctor', 'patient']:
            raise serializers.ValidationError('Attention : Rôle invalide')

        if not profile_data:
            raise serializers.ValidationError("Attention : Les informations du profil son requise")

        if role == 'doctor':
            required_fields = ['speciality', 'inami_number']  #Docteur
        else :
            required_fields = ['nationnal_number']            #Patient

        for field in required_fields:
            if field not in profile_data.get(field):
                raise serializers.ValidationError({role: f'Le champ "{field}" est obligatoire.'})

        return data


    def create(self, validated_data):
       profile_data = validated_data.pop('doctor', None) or validated_data.pop('patient', None)
       password = validated_data.pop('password')
       role = validated_data['role']

       user = CustomUser(**validated_data)
       user.set_password(password)
       user.save()

       if role == 'doctor':
           Doctor.objects.create(user=user, **profile_data)
       elif role == 'patient':
           Patient.objects.create(user=user, **profile_data)

       return user