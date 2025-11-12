from django.db import models


# Create your models here.
class Address(models.Model):
    street = models.CharField(max_length=255)
    number = models.CharField(max_length=10, blank=True, null=True)
    postal_code = models.CharField(max_length=20)
    city = models.CharField(max_length=100)
    country = models.CharField(max_length=100, default="Belgium")


class Site(models.Model):
    name = models.TextField()
    site_type = models.CharField(
        max_length=20,
        choices=[
            ("HOSPITAL", "Hôpital"),
            ("CLINIC", "Clinique"),
            ("CABINET", "Cabinet"),
        ],
    )

    address = models.ManyToManyField(Address, related_name="site")
