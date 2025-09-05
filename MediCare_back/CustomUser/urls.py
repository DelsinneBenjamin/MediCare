from django.contrib import admin
from django.db import router
from django.http import HttpResponse
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from CustomUser.views import UserRegistrationView, UserLoginView, LinkPatientDoctorView

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='user-register'),
    path('login/', UserLoginView.as_view(), name='user-login'),
    path('add_patient_to_doctor/', LinkPatientDoctorView.as_view(), name='link-patient-doctor')
]