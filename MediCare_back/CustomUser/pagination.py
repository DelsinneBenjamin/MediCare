from rest_framework.pagination import PageNumberPagination      # classe DRG pour gérer les num de pages
from rest_framework.response import Response                    # La partie HTTP que je retournais en Response(...) dans mes fonctions AVANT pagination
from django.conf import settings                                # Sert pour récup les param de django genre la taille de page


#Ici c'est une fonction de paginiation qui me servira pour tout mes actionList de viewsets ou DRF ne peu pas gérer la pagination automatiquement...
#Je l'ai mis dans un fichier à part pour pas alourdir views.py et pour pouvoir la réutiliser partout
# a utiliser quand je veux paginer une liste d'objets (ex: users_by_role)
# voir doc DRF https://www.django-rest-framework.org/api-guide/pagination/#custom-pagination-styles
class StandardResultsSetPagination(PageNumberPagination):
    page_size = getattr(settings, 'PAGE_SIZE', 10)  # fallback sur 5 si pas défini
    page_size_query_param = 'page_size'
    max_page_size = 100

    def get_paginated_response(self, data):
        return Response({
            'count': self.page.paginator.count,
            'next': self.get_next_link(),
            'previous': self.get_previous_link(),
            'results': data
        })
