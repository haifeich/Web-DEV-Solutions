from django_filters import FilterSet
from shop.models import Product

class ProductFilter(FilterSet):

    class Meta:
        model = Product
        fields = {'category': ['exact'], 'id': ['in']}
