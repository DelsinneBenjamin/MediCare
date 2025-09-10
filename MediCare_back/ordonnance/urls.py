from django.urls import path
from .views import (
    list_ordonnances,
    create_ordonnance,
    retrieve_ordonnance,
    update_ordonnance,
    delete_ordonnance
)

urlpatterns = [
    path('ordonnances/', list_ordonnances, name='list_ordonnances'),
    path('ordonnances/create/', create_ordonnance, name='create_ordonnance'),
    path('ordonnances/<int:pk>/', retrieve_ordonnance, name='retrieve_ordonnance'),
    path('ordonnances/<int:pk>/update/', update_ordonnance, name='update_ordonnance'),
    path('ordonnances/<int:pk>/delete/', delete_ordonnance, name='delete_ordonnance'),
]