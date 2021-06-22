from shop.filters import ArticleFilter
from shop.models import Article, Order
from shop.serializers import ArticleSerializer, OrderSerializer
from rest_framework.viewsets import ModelViewSet


class ArticleViewSet(ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    filterset_class = ArticleFilter

class OrderViewSet(ModelViewSet):
    queryset = Order.objects.all()
    serializer_class =OrderSerializer


