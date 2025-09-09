from django.db import models
from django.contrib.auth.models import AbstractUser

from location.models import Address, Site


# Create your models here.
class CustomUser(AbstractUser):
    ROLES_CHOICES = [
        ('doctor', 'Doctor'),
        ('patient', 'Patient'),
    ]

    role = models.CharField(max_length=20, choices=ROLES_CHOICES)

    #Un user à 1 seule adresse, une adresse peu avoir plusieurs user(genre une famille)
    #Many To One Adresse 1,N - 1,1 User
    # address = models.ForeignKey(Address, on_delete=models.CASCADE, related_name="customuser")
    address = models.ForeignKey(Address, on_delete=models.SET_NULL, null=True, blank=True)

class Doctor(models.Model):
    #Ici un Docteur EST un user (Je mets une primary_key=true car ça me permet d'avoir le même ID unique que dans le customUser)
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='doctor', primary_key=True)

    #Ils à ses propres champs
    speciality = models.CharField(max_length=20)
    inami_number = models.CharField(max_length=20)

    #Relation ManyToMany avec Patient : Un docteur peut avoir plusieurs patients et un patient peut avoir plusieurs docteurs
    patients = models.ManyToManyField('Patient', related_name='doctors', blank=True)

    # Un médecin peut travailler dans plusieurs sites
    sites = models.ManyToManyField(Site, related_name="doctor")


    def __str__(self):
        return f"Dr. {self.user.get_full_name()} - {self.speciality} ({self.inami_number})"

class Patient(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='patient', primary_key=True)
    nationnal_number = models.CharField(max_length=20)

    def __str__(self):
        return f"Patient.{self.user.get_full_name()} - {self.nationnal_number}"

