from django.core.management.base import BaseCommand
from django.contrib.auth.hashers import make_password
from CustomUser.models import CustomUser, Doctor, Patient, Speciality
from location.models import Address, Site
from ordonnance.models import Medicament, Ordonnance, OrdonnanceMedicament
from datetime import date, timedelta
import random


class Command(BaseCommand):
    help = "Initialize the database with doctors, patients, addresses, sites, medicaments and ordonnances"

    def handle(self, *args, **kwargs):
        # --- clean tables ---
        OrdonnanceMedicament.objects.all().delete()
        Ordonnance.objects.all().delete()
        Doctor.objects.all().delete()
        Patient.objects.all().delete()
        CustomUser.objects.all().delete()
        Address.objects.all().delete()
        Site.objects.all().delete()
        Medicament.objects.all().delete()
        Speciality.objects.all().delete()

        # ------------------ ADRESSES ------------------
        addresses_data = [
            ("Rue de la Loi", "1000", "Bruxelles"),
            ("Avenue Louise", "1050", "Ixelles"),
            ("Boulevard Tirou", "6000", "Charleroi"),
            ("Rue Saint-Gilles", "4000", "Liège"),
            ("Rue Royale", "1000", "Bruxelles"),
        ]
        addresses = []
        for i, (street, postal, city) in enumerate(addresses_data, 1):
            addr = Address.objects.create(
                street=street,
                number=str(i),
                postal_code=postal,
                city=city,
                country="Belgium"
            )
            addresses.append(addr)

        # ------------------ SITES ------------------
        site_types = ["HOSPITAL", "CLINIC", "CABINET"]
        sites = []
        for i in range(3):
            site = Site.objects.create(
                name=f"Site {i+1}",
                site_type=random.choice(site_types),
            )
            site.address.set(random.sample(addresses, k=2))
            sites.append(site)

        # ------------------ SPECIALITIES ------------------
        specialities_names = [
            "Cardiologue", "Dermatologue", "Pédiatre", "Neurologue",
            "Dentiste", "Psychiatre", "Radiologue", "Chirurgien",
            "Ophtalmologue", "Gynécologue", "ORL"
        ]
        specialities = []
        for name in specialities_names:
            s = Speciality.objects.create(name=name)
            specialities.append(s)

        # ------------------ DOCTEURS ------------------
        doctors_names = [
            ("Mathys", "Noteboom"),
            ("Sarah", "Cherchi"),
            ("Thomas", "Balatro"),
            ("Tomaso", "Geeko"),
            ("Pierre", "Chabrier")
        ]
        doctors = []
        for i, (first_name, last_name) in enumerate(doctors_names):
            username = f"{first_name}{last_name}".lower()
            user = CustomUser.objects.create(
                first_name=first_name,
                last_name=last_name,
                username=username,
                email=f"{username}@doc.com",
                role="doctor",
                password=make_password("password123"),
                address=random.choice(addresses),
            )
            doctor = Doctor.objects.create(
                user=user,
                speciality=specialities[i % len(specialities)],
                inami_number=f"INAMI{i+1:05d}"
            )
            doctor.sites.set(random.sample(sites, k=1))
            doctors.append(doctor)
        self.stdout.write(self.style.SUCCESS("✅ docteurs créés !"))

        # ------------------ PATIENTS ------------------
        patients_names = [
            ("Alice", "Durand"),
            ("Nathan", "Petit"),
            ("Léa", "Morel"),
            ("Tom", "Girard"),
        ]
        patients = []
        for i, (first_name, last_name) in enumerate(patients_names):
            username = f"{first_name}.{last_name}".lower()
            user = CustomUser.objects.create(
                first_name=first_name,
                last_name=last_name,
                username=username,
                email=f"{username}@patient.com",
                role="patient",
                password=make_password("password123"),
                address=random.choice(addresses),
            )
            patient = Patient.objects.create(
                user=user,
                nationnal_number=str(random.randint(10000000000, 99999999999))
            )
            patients.append(patient)
        self.stdout.write(self.style.SUCCESS("✅ patients créés !"))

        # ------------------ MÉDICAMENTS ------------------
        med_names = [
            "Paracetamol", "Ibuprofen", "Amoxicillin", "Aspirin",
            "Metformin", "Omeprazole"
        ]
        medicaments = []
        for name in med_names:
            med = Medicament.objects.create(name_m=name)
            medicaments.append(med)

        # ------------------ ORDONNANCES ------------------
        for patient in patients:
            for _ in range(random.randint(1, 2)):
                doctor = random.choice(doctors)
                ordonnance = Ordonnance.objects.create(
                    patient=patient,
                    doctor=doctor,
                    date_o=date.today() - timedelta(days=random.randint(0, 30)),
                    contentReport_o=f"Ordonnance pour {patient.user.first_name} {patient.user.last_name}"
                )
                for med in random.sample(medicaments, k=random.randint(1, 3)):
                    OrdonnanceMedicament.objects.create(
                        ordonnance=ordonnance,
                        medicament=med,
                        quantity=random.randint(1, 10)
                    )
        self.stdout.write(self.style.SUCCESS("✅ ordonnances créées !"))

        # ------------------ DOCTORPATIENT ------------------
        # Ici, on ne crée rien par défaut
        # La table DoctorPatient reste vide, ce sera le docteur qui ajoutera ses patients
        self.stdout.write(self.style.SUCCESS("✅ table DoctorPatient laissée vide !"))

        self.stdout.write(self.style.SUCCESS("✅ Base de test initialisée avec succès !"))
