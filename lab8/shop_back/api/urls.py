from django.urls import path
from api.views import products, product_id, categories, category_id, category_products

urlpatterns = [
    path('products/', products),
    path('products/<int:id>/', product_id),
    path('categories/', categories),
    path('categories/<int:id>/', category_id),
    path('categories/<int:id>/products/', category_products)
]