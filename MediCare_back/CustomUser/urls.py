from django.contrib import admin
from django.db import router
from django.http import HttpResponse
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from CustomUser.views import (
    register_user,
    login_user,
    link_patient_doctor,
    current_user,
    get_users_by_role,
    AllUsersView,
)

urlpatterns = [
    path('register/', register_user, name='register'),
    path('login/', login_user, name='login'),
    path('link/', link_patient_doctor, name='link_patient_doctor'),
    path('me/', current_user, name='current_user'),
    path('role/<str:role>/', get_users_by_role, name='get_users_by_role'),
    path('all/', AllUsersView.as_view(), name='get_all_users'),
]