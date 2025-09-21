from rest_framework.routers import DefaultRouter
from location.views import AddressViewSet, SiteViewSet

router = DefaultRouter()
router.register(r'addresses', AddressViewSet, basename='address')
router.register(r'sites', SiteViewSet, basename='site')

urlpatterns = router.urls
