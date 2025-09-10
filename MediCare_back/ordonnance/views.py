from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Ordonnance
from .serializer import OrdonnanceSerializer, OrdonnanceCreateUpdateSerializer


@api_view(['GET'])
def list_ordonnances(request):
    ordos = Ordonnance.objects.all()
    serializer = OrdonnanceSerializer(ordos, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_ordonnance(request):
    serializer = OrdonnanceCreateUpdateSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def retrieve_ordonnance(request, pk):
    ordo = Ordonnance.objects.get(pk=pk)
    serializer = OrdonnanceSerializer(ordo)
    return Response(serializer.data)

@api_view(['PUT', 'PATCH'])
def update_ordonnance(request, pk):
    ordo = Ordonnance.objects.get(pk=pk)
    serializer = OrdonnanceCreateUpdateSerializer(ordo, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_ordonnance(request, pk):
    ordo = Ordonnance.objects.get(pk=pk)
    ordo.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)