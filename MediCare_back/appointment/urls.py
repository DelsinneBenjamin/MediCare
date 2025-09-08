from django.urls import path
from .views import (
    list_appointments,
    create_appointment,
    retrieve_appointment,
    update_appointment,
    delete_appointment
)

urlpatterns = [
    path('appointment/', list_appointments, name='list_appointments'),
    path('appointment/create/', create_appointment, name='create_appointment'),
    path('appointment/<int:pk>/', retrieve_appointment, name='retrieve_appointment'),
    path('appointment/<int:pk>/update/', update_appointment, name='update_appointment'),
    path('appointment/<int:pk>/delete/', delete_appointment, name='delete_appointment'),
]
