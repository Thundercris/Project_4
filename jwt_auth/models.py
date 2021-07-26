from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.query import prefetch_related_objects

class User(AbstractUser):
    email = models.CharField(max_length=50, unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    profile_image =  models.CharField(max_length=300)

