from django.urls import path
from .views import (
    create_site,
    list_sites,
    retrieve_site,
    update_site,
    delete_site,
    create_address,
    list_addresses,
    retrieve_address,
    update_address,
    delete_address
)

urlpatterns = [
    #NE PAS OUBLIER DANS POSTMAN LES GET POST PUT...
    # Endpoints pour le  Site
    path('sites/', list_sites, name='list_sites'),              # GET
    path('sites/create/', create_site, name='create_site'),     # POST
    path('sites/<int:pk>/', retrieve_site, name='retrieve_site'),  # GET
    path('sites/<int:pk>/update/', update_site, name='update_site'),  # PUT/PATCH
    path('sites/<int:pk>/delete/', delete_site, name='delete_site'),  # DELETE
    # Endpoints pour l'Address
    path('addresses/', list_addresses, name='list_addresses'),       # GET
    path('addresses/create/', create_address, name='create_address'),  # POST
    path('addresses/<int:pk>/', retrieve_address, name='retrieve_address'),  # GET
    path('addresses/<int:pk>/update/', update_address, name='update_address'),  # PUT/PATCH
    path('addresses/<int:pk>/delete/', delete_address, name='delete_address'),  # DELETE
]