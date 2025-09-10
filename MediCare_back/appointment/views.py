from django.shortcuts import render

# Create your views here.
# views.py
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .models import Appointments
from .serializer import AppointmentsSerializer

@api_view(['GET'])
def list_appointments(request):
    appointments = Appointments.objects.all()
    serializer = AppointmentsSerializer(appointments, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_appointment(request):
    serializer = AppointmentsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def retrieve_appointment(request, pk):
    appointment = Appointments.objects.get(pk=pk)
    serializer = AppointmentsSerializer(appointment)
    return Response(serializer.data)

@api_view(['PUT', 'PATCH'])
def update_appointment(request, pk):
    appointment = Appointments.objects.get(pk=pk)
    serializer = AppointmentsSerializer(appointment, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_appointment(request, pk):
    appointment = Appointments.objects.get(pk=pk)
    appointment.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
