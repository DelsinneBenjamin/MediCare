from rest_framework.exceptions import ValidationError
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
    # Lie un patient à un docteur + verif
    try:
        patient = Patient.objects.get(user_id=patient_id)
    except Patient.DoesNotExist:
        raise ValidationError({"patient_id": "Patient non trouvé."})

    try:
        doctor = Doctor.objects.get(user_id=doctor_id)
    except Doctor.DoesNotExist:
        raise ValidationError({"doctor_id": "Docteur non trouvé."})

    user_patient = patient.user  # CustomUser lié au patient

    # Verif si le patient est pas déjà lié
    if doctor.patients.filter(id=user_patient.id).exists():
        raise ValidationError({"non_field_errors": ["Patient déjà lié à ce docteur."]})

    # Ici je vérifie que l'user ne prend pas un médecin qui à déjà la même spécialité
    # (a qui il est déjà affilé)
    has_same_speciality = Doctor.objects.filter(
        patients=user_patient,
        speciality=doctor.speciality
    ).exclude(user_id=doctor_id).exists()

    if has_same_speciality:
        spec_name = doctor.speciality
        raise ValidationError({
            "non_field_errors": [f"Le patient a déjà un docteur spécialisé en : {doctor.speciality}"]
        })

    # Lie le patient au docteur
    doctor.patients.add(user_patient)
    doctor.save()

    return doctor


def unlink_patient(patient_id: int, doctor_id: int):
    # Récupère le patient et le docteur
    try:
        patient = Patient.objects.get(user_id=patient_id)
        doctor = Doctor.objects.get(user_id=doctor_id)
    except Patient.DoesNotExist:
        raise ValidationError({"patient_id": "Patient non trouvé"})
    except Doctor.DoesNotExist:
        raise ValidationError({"doctor_id": "Docteur non trouvé"})

    user_patient = patient.user  # CustomUser lié au patient

    # Vérifie si le patient est bien lié avant de le retirer
    if not doctor.patients.filter(id=user_patient.id).exists():
        raise ValidationError({"non_field_errors": "Le patient n'est pas lié à ce docteur"})

    # Supprime le patient du docteur
    doctor.patients.remove(user_patient)
    doctor.save()
