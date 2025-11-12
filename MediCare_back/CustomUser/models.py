from django.db import models
from django.contrib.auth.models import AbstractUser

from location.models import Address, Site


# Create your models here.
class CustomUser(AbstractUser):
    ROLES_CHOICES = [
        ("doctor", "Doctor"),
        ("patient", "Patient"),
    ]

    role = models.CharField(max_length=20, choices=ROLES_CHOICES)

    # Un user à 1 seule adresse, une adresse peu avoir plusieurs user(genre une famille)
    # Many To One Adresse 1,N - 1,1 User
    # address = models.ForeignKey(Address, on_delete=models.CASCADE, related_name="customuser")
    address = models.ForeignKey(
        Address, on_delete=models.SET_NULL, null=True, blank=True
    )


# Ici je rajoute une classe Speciality pour gérer les spécialités des docteurs, ça me permettra d'avoir une liste propre et réutilisable
class Speciality(models.Model):
    name = models.CharField(max_length=50, unique=True)


class Doctor(models.Model):
    # Ici un Docteur EST un user (Je mets une primary_key=true car ça me permet d'avoir le même ID unique que dans le customUser)
    user = models.OneToOneField(
        CustomUser, on_delete=models.CASCADE, related_name="doctor", primary_key=True
    )

    # Relation ManyToOne avec Speciality : Un docteur à une spécialité, une spécialité peut avoir plusieurs docteurs
    speciality = models.ForeignKey(
        Speciality, on_delete=models.SET_NULL, null=True, related_name="doctors"
    )

    inami_number = models.CharField(max_length=20)

    # Relation ManyToMany avec Patient : Un docteur peut avoir plusieurs patients et un patient peut avoir plusieurs docteurs
    patients = models.ManyToManyField(CustomUser, related_name="doctors", blank=True)

    # Un médecin peut travailler dans plusieurs sites
    sites = models.ManyToManyField(Site, related_name="doctor")


class Patient(models.Model):
    user = models.OneToOneField(
        CustomUser, on_delete=models.CASCADE, related_name="patient", primary_key=True
    )
    nationnal_number = models.CharField(max_length=20)

    def __str__(self):
        return f"Patient.{self.user.get_full_name()} - {self.nationnal_number}"

    class Meta:
        unique_together = ("nationnal_number",)


# Table intermédiaire pour gérer les liens entre docteurs et patients avec des attributs supplémentaires
# is_linked me permetra de savoir si un patient est toujours lié à un docteur ou pas (utile pour l'historique)
# linked_at pour savoir quand le lien a été créé
class DoctorPatient(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    patient = models.ForeignKey(
        Patient, on_delete=models.CASCADE, null=True, blank=True
    )
    speciality = models.ForeignKey(
        Speciality, on_delete=models.CASCADE, null=True, blank=True
    )
    # speciality = models.ForeignKey(Speciality, on_delete=models.CASCADE) #TODO  => A CHANGER PAR CECI UNE FOIS EN PROD! PAS DE NULL TRUE BLANK TRUE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    is_linked = models.BooleanField(default=True)
    linked_at = models.DateTimeField(auto_now_add=True)

    # ici gros morceau update : je rajoute une contrainte unique conditionnelle pour faire en sorte qu'un patient ne puisse pas avoir deux spécialités actives identiques
    class Meta:
        # Liste de contrainte (Que django traduit en instru SQL lors des migrations, ça remplace l'ancien unique_together)
        constraints = [
            # creation de la contrainte d'unicité conditionnelle
            models.UniqueConstraint(
                # Liste des collognes sur lesquelles s'applique la contrainte (ici patient et spécialité du docteur)
                fields=["patient", "speciality"],
                # ici la contrainte n'est appliquée que si is_linked est True
                condition=models.Q(is_linked=True),
                # Le nom il sert juste au cas ou pour les erreurs de migrations etc.. (conseillé d'après le livre de django)
                name="unique_active_speciality_per_patient",
            )
        ]
