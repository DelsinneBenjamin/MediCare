from django.db import models

from CustomUser.models import Patient, Doctor


# Create your models here.
class Appointments(models.Model):
    date_start = models.DateField()
    hour_start = models.TimeField()
    hour_end   = models.TimeField()
    report = models.TextField(blank=True, null=True)

    #OneToMany : Un patient peu avoir plusieurs RDV
    #Un RDV concerne 1 et 1 seul patient (ForeignKey)
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, related_name="appointment")

    #Ici pareil... sauf que models.PROTECT car si je tente de del un médecin qui a encore des RDV => PAS OK
    #Pour un patient OSEF car c'est lui qui décide...
    doctor = models.ForeignKey(Doctor, on_delete=models.PROTECT, related_name="appointment")












