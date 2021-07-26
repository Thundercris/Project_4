from django.contrib import admin
from django.contrib.auth import get_user_model

User = get_user_model() # GET THE CURRENT USER MODEL, CUSTOM USER NOT THE DJANGO DEFAULT USER.\

admin.site.register(User)