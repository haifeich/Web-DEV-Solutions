from shop.models import Article, Order
from rest_framework.serializers import HyperlinkedModelSerializer

class ArticleSerializer(HyperlinkedModelSerializer):

    class Meta:
        model = Article
        fields = ['id', 'title', 'description', 'price', 'category', 'image']
        read_only_fields = ['id']

class OrderSerializer(HyperlinkedModelSerializer):

    class Meta:
        model = Order
        fields = ['id', 'first_name', 'last_name', 'address', 'city', 'post_code', 'product']
        read_only_fields = ['id']