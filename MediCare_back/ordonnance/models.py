from django.db import models

# Pas d'import direct de CustomUser.models pour éviter le circular import problème vu que j'ai modifié le models CustomUser en rajoutant Speciality.. donc ça casse tout sauf si je fait ceci :)

class Medicament(models.Model):
    name_m = models.TextField()


class Ordonnance(models.Model):
    #Vu que c'est que du "text" je peux mettre CustomUser.Patient directement en string
    patient = models.ForeignKey('CustomUser.Patient', on_delete=models.CASCADE, related_name="ordonnances")
    doctor = models.ForeignKey('CustomUser.Doctor', on_delete=models.PROTECT, related_name="ordonnances")

    date_o = models.DateField()
    contentReport_o = models.TextField()
    # through permet d'utiliser la table intermédiaire pour les attributs supplémentaires
    medicaments = models.ManyToManyField(Medicament, through="OrdonnanceMedicament")


class OrdonnanceMedicament(models.Model):
    ordonnance = models.ForeignKey(Ordonnance, on_delete=models.CASCADE)
    medicament = models.ForeignKey(Medicament, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
