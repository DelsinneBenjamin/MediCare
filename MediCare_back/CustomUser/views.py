from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics, permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

from CustomUser.models import CustomUser
from CustomUser.permissions import IsDoctorOrAdmin
from CustomUser.serializers import RegisterSerializer, LoginSerializer, UserSerializer, LinkPatientDoctorSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny


# ============== Inscription d'un utilisateur =============
@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def register_user(request):
    serializer = RegisterSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()

    refresh = RefreshToken.for_user(user)

    data = {
        'user': UserSerializer(user).data,
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

    return Response(data, status=status.HTTP_201_CREATED)

# ============== Connexion d'un utilisateur =============
@api_view(['POST'])
@permission_classes([AllowAny])
def login_user(request):
    serializer = LoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)

    user = serializer.validated_data["user"]
    refresh = RefreshToken.for_user(user)

    data = {
        'user': UserSerializer(user).data,
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

    return Response(data, status=status.HTTP_200_OK)

# ============== Liaison ManyToMany entre le médecin et le patient =============
@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def link_patient_doctor(request):
    serializer = LinkPatientDoctorSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()

    return Response({'détail': 'Patient lié au Docteur'}, status=status.HTTP_200_OK)

# ============== Récup les data du current user  =============
@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def current_user(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


# ============= Récup l'ensemble des utilisateurs par rôles ===============
@api_view(['GET'])
@permission_classes([AllowAny])
def get_users_by_role(request, role):
    if role == 'doctor':
        users = CustomUser.objects.filter(doctor__isnull=False)
    elif role == 'patient':
        users = CustomUser.objects.filter(patient__isnull=False)
    else:
        return Response(
            {"detail": "Rôle invalide."}
        )

    serializer = UserSerializer(users, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


# ============= Récup l'ensemble des utilisateurs ===============

class AllUsersView(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]