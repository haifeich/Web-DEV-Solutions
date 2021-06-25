# TODO: Write your serializers here
from shop.models import Product
from rest_framework.serializers import HyperlinkedModelSerializer

class ProductSerializer(HyperlinkedModelSerializer):

    class Meta:
        model = Product
        fields = ['id', 'title','price', 'description', 'category', 'image']
        read_only_fields = ['id']