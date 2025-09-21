from jinja2.idtracking import VAR_LOAD_ALIAS
from rest_framework.exceptions import ValidationError

import ordonnance
from CustomUser.models import CustomUser, Doctor, Patient


def create_user_with_profile(validated_data):
    password = validated_data.pop('password')
    profile_data = validated_data.pop('profile_data')
    role = validated_data.pop('role')

    user = CustomUser(**validated_data, role=role)
    user.set_password(password)
    user.save()

    if role == 'doctor':
        Doctor.objects.create(user=user, **profile_data)
    else:
        Patient.objects.create(user=user, **profile_data)

    return user


def link_patient_doctor(patient_id: int, doctor_id: int) -> Doctor:
    #Lie un patient à un docteur + verif
    try:
        patient = Patient.objects.get(user_id=patient_id)
    except Patient.DoesNotExist:
        raise ValidationError({"patient_id": "Patient non trouvé."})

    try:
        doctor = Doctor.objects.get(user_id=doctor_id)
    except Doctor.DoesNotExist:
        raise ValidationError({"doctor_id": "Doctor non trouvé."})

    # Verif si le patient est pas déjà lié
    if doctor.patients.filter(user_id=patient_id).exists():
        raise ValidationError({"non_field_errors": "Patient déjà lié à ce docteur."})

    #Ici je vérifie que l'user ne prend pas un médecin qui à déjà la même spécialité (a qui il est déjà affilé)
    same_speciality = Doctor.objects.filter(
        patients=patient,
        speciality=doctor.speciality
    ).exclude(user_id=doctor_id).exists()

    if same_speciality:
        raise ValidationError({
            f"Le patient a déjà un docteur spécialisé en : {doctor.speciality}"
        })

    return doctor


def unlink_patient(patient_id: int, doctor_id: int):
    try:
        patient = Patient.objects.get(user_id=patient_id)
        doctor = Doctor.objects.get(user_id=doctor_id)
    except Patient.DoesNotExist:
        raise ValidationError({"patient_id": "Patient non trouvé"})
    except  Doctor.DoesNotExist:
        raise ValidationError({"doctor_id": "Docteur non trouvé"})

    if not doctor.patients.filter(user_id=patient_id).exists():
        raise ValidationError({"Le patient n'est pas lié à ce docteur"})

    doctor.patients.remove(patient)
    doctor.save()
