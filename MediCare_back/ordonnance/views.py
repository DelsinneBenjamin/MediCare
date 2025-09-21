from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Medicament, Ordonnance
from .serializer import (
    MedicamentSerializer,
    OrdonnanceSerializer,
    OrdonnanceCreateUpdateSerializer,
)


class MedicamentViewSet(viewsets.ModelViewSet):
    queryset = Medicament.objects.all()
    serializer_class = MedicamentSerializer
    permission_classes = [IsAuthenticated]


class OrdonnanceViewSet(viewsets.ModelViewSet):
    queryset = Ordonnance.objects.all()
    permission_classes = [IsAuthenticated]

    def get_serializer_class(self):
        #ici j'ai du trouver un moyen pour utiliser mon serializer pour CreateUpdateSerializer
        if self.action in ["create", "update", "partial_update"]:
            return OrdonnanceCreateUpdateSerializer
        return OrdonnanceSerializer
