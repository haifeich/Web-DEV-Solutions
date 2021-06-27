from django.contrib.admin import ModelAdmin, register
from shop.models import Product

@register(Product)
class ProductAdmin(ModelAdmin):
    list_display =('title','category')
    pass
