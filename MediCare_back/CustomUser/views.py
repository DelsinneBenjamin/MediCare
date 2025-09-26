from rest_framework import status, viewsets
from rest_framework.decorators import action, permission_classes
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from CustomUser.models import CustomUser
from CustomUser.serializers import (
    RegisterSerializer, UserSerializer, DoctorSerializer,
    PatientSerializer, LoginSerializer
)
from rest_framework.permissions import IsAuthenticated, AllowAny

from CustomUser.user_service import link_patient_doctor, unlink_patient
from ordonnance.serializer import OrdonnanceSerializer


#Pour ceux qui lisent mon code.. j'utilise maintenant des viewset.ModelViewSet pour la raison suivante:
#Lavantages de les utiliser c'est que si je n'utilise que le queryset + serializer class
#Jobtient d'office le CRUD basique ! pas besoin de les recrée.. ici les def que j'ajoute son là pour des besoins spécifiques

# ============= UserViewSets ===============
class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


    #C'est une méthode du DRF qui permet de passer des informations supplémentaires au serializer, des types, des données,.... ici isLinked
    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context

    @action(detail=False, methods=['get'], url_path='me', permission_classes = [IsAuthenticated])
    def me(self, request):
        serializer = self.get_serializer(request.user)
        return Response(serializer.data)

    @action(detail=False, methods=['get'], url_path='by-role/(?P<role>[^/.]+)', permission_classes = [IsAuthenticated])
    def users_by_role(self, request, role=None):
        if role == 'doctor':
            users = CustomUser.objects.filter(doctor__isnull=False)
        elif role == 'patient':
            users = CustomUser.objects.filter(patient__isnull=False)
        else:
            return Response({"detail": "Role invalide"}, status=400)

        serializer = self.get_serializer(users, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['post'], url_path='register', permission_classes=[AllowAny])
    def register(self, request):
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response(UserSerializer(user).data, status=201)

    @action(detail=False, methods=['post'], url_path='login', permission_classes=[AllowAny])
    def login(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = serializer.validated_data['user']
        refresh = RefreshToken.for_user(user)

        data = {
            'user': UserSerializer(user).data,
            'refresh': str(refresh),
            'access': str(refresh.access_token)
        }

        return Response(data, status=status.HTTP_200_OK)

# ============== DoctorViewSet =============
class DoctorViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.filter(doctor__isnull=False)
    serializer_class = UserSerializer

    #Pour Swagger, je suis obliger de définir un create car sinon il ne sait pas quel serializer utiliser..
    #donc lorsque je souhaite crée un docteur, il va d'office aller consulter celui de Register..
    #Pourquoi faire ça et pas mettre en ReadOnlyViewSet? car je perdrais mon CRUD de base..
    def create(self, request, *args, **kwargs):
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)

    @action(detail=True, methods=['post'], url_path='link', permission_classes = [IsAuthenticated])
    def link_patient(self, request, pk=None):
        patient_id = request.data.get('patient_id')
        if not patient_id:
            return Response({'patient_id': 'Ce champ est requis.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            doctor = link_patient_doctor(patient_id=patient_id, doctor_id=pk)
        except ValidationError as e:
            raise e

        return Response({
            'message': f'Patient lié au docteur {doctor}.',
            'doctor': UserSerializer(doctor.user).data
        }, status=status.HTTP_200_OK)

    @action(detail=True, methods=['post'], url_path='unlink_patient', permission_classes = [IsAuthenticated])
    def unlink_patient_action(self, request, pk=None):
        patient_id = request.data.get('patient_id')
        if not patient_id:
            return Response({'patient_id': 'Le patient est requis'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            unlink_patient(patient_id=patient_id, doctor_id=pk)
        except ValidationError as e:
            raise e
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response({'message': 'Lien supprimé'}, status=status.HTTP_200_OK)

    @action(detail=True, methods=['get'], permission_classes = [IsAuthenticated])
    def get_patients(self, request, pk=None, ):
        doctor = self.get_object().doctor  # profil docteur lié
        patients = doctor.patients.all()
        serializer = UserSerializer(patients, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path='ordonnances', permission_classes = [IsAuthenticated])
    def get_ordonnances(self, request, pk=None):
        doctor = self.get_object().doctor
        ordonnances = doctor.ordonnances.all()
        serializer = OrdonnanceSerializer(ordonnances, many=True)
        return Response(serializer.data)


# ============== PatientViewSet =============
class PatientViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.filter(patient__isnull=False)
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    @action(detail=True, methods=['get'], url_path='doctors', permission_classes = [IsAuthenticated])
    def get_doctors(self, request, pk=None):
        patient = self.get_object().patient
        doctors = patient.doctors.all()
        serializer = DoctorSerializer(doctors, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path='prescriptions', permission_classes = [IsAuthenticated])
    def get_ordonnances(self, request, pk=None):
        patient = self.get_object().patient
        ordonnances = patient.prescriptions.all()
        serializer = OrdonnanceSerializer(ordonnances, many=True)
        return Response(serializer.data)
