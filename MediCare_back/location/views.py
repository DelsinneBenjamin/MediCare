from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Site, Address
from .serializer import SiteSerializer, AddressSerializer


# ------------------ Site ------------------
@api_view(['GET'])
def list_sites(request):
    sites = Site.objects.all()
    serializer = SiteSerializer(sites, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_site(request):
    serializer = SiteSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def retrieve_site(request, pk):
    site = Site.objects.get(pk=pk)
    serializer = SiteSerializer(site)
    return Response(serializer.data)

@api_view(['PUT', 'PATCH'])
def update_site(request, pk):
    site = Site.objects.get(pk=pk)
    serializer = SiteSerializer(site, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_site(request, pk):
    site = Site.objects.get(pk=pk)
    site.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

# ------------------ Address ------------------
@api_view(['GET'])
def list_addresses(request):
    addresses = Address.objects.all()
    serializer = AddressSerializer(addresses, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_address(request):
    serializer = AddressSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def retrieve_address(request, pk):
    address = Address.objects.get(pk=pk)
    serializer = AddressSerializer(address)
    return Response(serializer.data)

@api_view(['PUT', 'PATCH'])
def update_address(request, pk):
    address = Address.objects.get(pk=pk)
    serializer = AddressSerializer(address, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_address(request, pk):
    address = Address.objects.get(pk=pk)
    address.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
