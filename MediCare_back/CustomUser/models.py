from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CustomUser(AbstractUser):
    ROLES_CHOICES = [
        ('doctor', 'Doctor'),
        ('patient', 'Patient'),
    ]

    role = models.CharField(max_length=20, choices=ROLES_CHOICES)

class Doctor(models.Model):
    #Ici un Docteur EST un user
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='doctor')

    #Ils à ses propres champs
    speciality = models.CharField(max_length=20)
    inami_number = models.CharField(max_length=20)

    #Relation ManyToMany avec Patient : Un docteur peut avoir plusieurs patients et un patient peut avoir plusieurs docteurs
    patients = models.ManyToManyField('Patient', related_name='doctors', blank=True)

    def __str__(self):
        return f"Dr. {self.user.get_full_name()} - {self.speciality} ({self.inami_number})"

class Patient(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='patient')
    nationnal_number = models.CharField(max_length=20)

    def __str__(self):
        return f"Patient.{self.user.get_full_name()} - {self.nationnal_number}"

