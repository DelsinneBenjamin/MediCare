from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CustomUser(AbstractUser):
    phone = models.CharField(max_length=11, unique=True)
    ROLES_CHOICES = [
        ('admin', 'Admin'),
        ('doctor', 'Doctor'),
        ('patient', 'Patient'),
    ]
    role = models.CharField(max_length=20, choices=ROLES_CHOICES)

class Doctor(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    speciality = models.CharField(max_length=20)
    inami_number = models.CharField(max_length=20)

    def __str__(self):
        return f"Dr. {self.user.get_full_name()} - {self.speciality} ({self.inami_number})"

class Patient(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    nationnal_number = models.CharField(max_length=20)

    def __str__(self):
        return f"Patient.{self.user.get_full_name()} - {self.nationnal_number}"
