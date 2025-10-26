from django.test import TestCase
from django.db import IntegrityError, transaction
from CustomUser.models import CustomUser, Doctor, Patient, DoctorPatient, Speciality
from location.models import Address, Site


# Create your tests here.


class DoctorPatientModelTestCase(TestCase):
    def setUp(self):
        self.address = Address.objects.create(street="123 Main St", city="Anytown", postal_code="12345", country="Country")
        self.speciality = Speciality.objects.create(name="Cardiology")

        # Je crée un user docteur
        self.user_doctor = CustomUser.objects.create_user(username="docuser", password="password", role="doctor", address=self.address)
        self.doctor = Doctor.objects.create(user=self.user_doctor, speciality=self.speciality, inami_number="INAMI12345")

        # Je crée un user patient
        self.user_patient = CustomUser.objects.create_user(username="patuser", password="password", role="patient", address=self.address)
        self.patient = Patient.objects.create(user=self.user_patient, nationnal_number="NN123456789")

    def test_doctor_patient_creation(self):
        """Verifier qu'on peut crée un lien valide entre un docteur et un patient"""
        link =DoctorPatient.objects.create(doctor=self.doctor, patient=self.patient,speciality=self.speciality)

        self.assertTrue(link.is_linked)
        self.assertEqual(link.speciality.name, "Cardiology")

    def test_doctor_patient_unique_constraint(self):
        """Verifier qu'on ne peut pas créer deux liens identiques entre le même docteur et le même patient & d'un docteur et un patient avec la même spécialité"""
        DoctorPatient.objects.create(doctor=self.doctor, patient=self.patient,speciality=self.speciality)

        # Bloc isolé pour capter l'erreur sans casser la transaction globale => conseiller dans la doc : https://docs.djangoproject.com/en/5.1/topics/testing/tools/#testing-transactions
        with self.assertRaises(IntegrityError):
            with transaction.atomic():
                DoctorPatient.objects.create(
                    doctor=self.doctor,
                    patient=self.patient,
                    speciality=self.speciality,
                    is_linked=True
                )

        #verifie qu'un seul enregistrement existe vraiment
        count = DoctorPatient.objects.count()
        self.assertEqual(count,1,"Il ne doit y avoir qu'un seul lien entre le docteur et le patient avec la même spécialité.")