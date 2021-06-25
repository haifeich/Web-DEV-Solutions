from django.db.models import Model
from django.db.models import CharField, DecimalField, TextField

class Product(Model):
    title = CharField(max_length=150)
    price = DecimalField(max_digits=10, decimal_places=2)
    description = TextField()
    category = CharField(max_length=50)
    image = CharField(max_length=200)
