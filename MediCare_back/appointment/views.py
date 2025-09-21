# appointment/views.py
from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Appointments
from .serializer import AppointmentsSerializer

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointments.objects.all()
    serializer_class = AppointmentsSerializer
    permission_classes = [permissions.IsAuthenticated]

    # Filtrer les rendez-vous par patient
    @action(detail=False, methods=['get'], url_path='by-patient/(?P<patient_id>[^/.]+)')
    def by_patient(self, request, patient_id=None):
        appointments = self.queryset.filter(patient_id=patient_id)
        serializer = self.get_serializer(appointments, many=True)
        return Response(serializer.data)

    # Filtrer les rendez-vous par docteur
    @action(detail=False, methods=['get'], url_path='by-doctor/(?P<doctor_id>[^/.]+)')
    def by_doctor(self, request, doctor_id=None):
        appointments = self.queryset.filter(doctor_id=doctor_id)
        serializer = self.get_serializer(appointments, many=True)
        return Response(serializer.data)