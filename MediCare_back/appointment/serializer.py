from rest_framework import serializers
from .models import Appointments

class AppointmentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointments
        fields = ['id', 'date_start', 'hour_start', 'hour_end', 'report', 'patient', 'doctor']