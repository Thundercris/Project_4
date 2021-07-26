# CHECK IF THE USER IS AUTHENTICATED OR NOT
from rest_framework import authentication
from rest_framework.authentication import BaseAuthentication, BasicAuthentication
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt

User = get_user_model()

class JWTAuthentication(BasicAuthentication):

    def authenticate(self, request):
      # GET THE TOKEN FROM THE REQUEST
      header = request.headers.get('Authorization')

      # IF NO TOKEN IN THE HEADER, RETURN NONE
      if not header:
          return None

      # IF THE TOKEN IS IN THE INCORRECT FORMAT, THROW AN ERROR
      if not header.startswith('Bearer'):
          raise PermissionDenied(detail="Invalid token")
      
      # IF THE TOKEN DOES START WITH BEARER. NEED TO REMOVE AND REPLACE WITH EMPTY STRING
      token = header.replace('Bearer ', '')

      try:
          # DECODE THE TOKEN TO GET THE PAYLOAD (INFO ABOUT THE USER THAT IS INSIDE THE TOKEN)
          # NEEDS THE TOKEN, THE SECRET AND THE ALGORITHMS
          payload  = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
          user = User.objects.get(pk=payload.get('sub'))
          # USE THE SUB FROM PAYLOAD TO SEARCH THE DB FOR A MATCHING USER
      except jwt.exceptions.InvalidTokenError: # IF THE TOKEN IS INVALID
          raise PermissionDenied(detail='Invalid token')
      except User.DoesNotExist:
        raise PermissionDenied(detail='User not found')
        # ISSUE WITH FINDING THE USER, THROW AN ERROR

      # IF IT'S EVERYNG FINE TOKEN IS VALID AND USER HAS BEEN FOUND
      return (user, token)
        