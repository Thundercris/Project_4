from django.urls import path
from django.urls.resolvers import URLPattern
from .views import RegisterView

urlpatterns  = [
    path('register/', RegisterView.as_view())
]