from django.db import models

from CustomUser.models import Patient, Doctor


# Create your models here.
class Medicament(models.Model):
    name_m = models.TextField()


class Ordonnance(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, related_name="ordonnances")
    doctor = models.ForeignKey(Doctor, on_delete=models.PROTECT, related_name="ordonnances")

    date_o = models.DateField()
    contentReport_o = models.TextField()
    #through me fait avoir la relation avec la table intermediaire écris en dessous
    medicaments = models.ManyToManyField(Medicament, through="OrdonnanceMedicament")

#Ici je crée une table intermediaire MOI MEME car j'ai un attribut supplémentaire Quantité
#Si je n'avais aucune table, je n'aurais pas besoin de le faire, Django l'aurais fait automatiquement

class OrdonnanceMedicament(models.Model):
    ordonnance = models.ForeignKey(Ordonnance, on_delete=models.CASCADE)
    medicament = models.ForeignKey(Medicament, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
