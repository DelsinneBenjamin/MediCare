from django.urls import path, include
from rest_framework.routers import DefaultRouter
from CustomUser.views import UserViewSet, DoctorViewSet, PatientViewSet

router = DefaultRouter()

router.register(r'users', UserViewSet, basename='user')
router.register(r'doctors', DoctorViewSet, basename='doctor')
router.register(r'patients', PatientViewSet, basename='patient')

urlpatterns = [
    path('', include(router.urls)),
]