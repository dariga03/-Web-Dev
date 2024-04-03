from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length = 100)

    def to_json(self):
        return{
            'id':self.id,
            'name':self.name
        }

class Products(models.Model):
    name = models.CharField(max_length = 200)
    price = models.FloatField(default = 0)
    description = models.TextField(default = 'No description')
    count = models.IntegerField(default = 0)
    is_active = models.BooleanField(default = False)
    category = models.ForeignKey(Category, on_delete = models.CASCADE)

    def to_json(self):
        return {
            'id': self.id,
            'name':self.name,
            'price':self.price,
            'description':self.description,
            'count':self.count,
            'is_active':self.is_active,
            'category':self.category.name
        }