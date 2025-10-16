from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import action

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

    @action(detail=False, methods=["get"], url_path="patient/(?P<patient_id>[^/.]+)")
    def getOrdonnanceByPatient(self, request, patient_id=None):
        ordonnances = self.queryset.filter(patient_id=patient_id)
        serializer = OrdonnanceSerializer(ordonnances, many=True)
        return Response(serializer.data)

