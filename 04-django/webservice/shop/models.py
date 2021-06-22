from django.db.models import Model
from django.db.models import CharField, JSONField, DecimalField, TextField, IntegerField



class Order(Model):
    first_name= CharField(max_length=50)
    last_name= CharField(max_length=50)
    address = CharField(max_length=50)
    city = CharField(max_length=50)
    post_code = IntegerField()
    product = JSONField()


class Article(Model):
    title = CharField(max_length=100)
    price = DecimalField(max_digits=8, decimal_places=2)
    description = TextField()
    category=CharField(max_length= 50)
    image = CharField(max_length=200)
   