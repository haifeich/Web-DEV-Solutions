from django.shortcuts import render
from shop.models import Product
from shop.serializers import ProductSerializer
from shop.filters import ProductFilter
from rest_framework.viewsets import ModelViewSet


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filterset_class = ProductFilter

