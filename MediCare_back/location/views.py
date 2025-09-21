from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from location.models import Address, Site
from location.serializer import AddressSerializer, SiteSerializer


class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer
    permission_classes = [IsAuthenticated]


class SiteViewSet(viewsets.ModelViewSet):
    queryset = Site.objects.all()
    serializer_class = SiteSerializer
    permission_classes = [IsAuthenticated]