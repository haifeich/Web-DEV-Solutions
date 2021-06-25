from django.shortcuts import render
from shop.models import Product
from shop.serializers import ProductSerializer
from rest_framework.viewsets import ModelViewSet


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

