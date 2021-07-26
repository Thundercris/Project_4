from categories.models import Category
from django import urls
from django.urls import path
from .views import CategoryListView

urlpatterns = [
    path('', CategoryListView.as_view())
]