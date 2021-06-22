from shop.views import ArticleViewSet, OrderViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('articles', ArticleViewSet)
router.register('order', OrderViewSet )
urlpatterns = router.urls
