from rest_framework import serializers
from django.contrib.auth import get_user_model, password_validation
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    password =  serializers.CharField(write_only=True)
    password_confirmation = serializers.CharField(write_only=True)

    def validate(self, data):

      # REMOVE THE PASSWORD AND PASSWORD CONFIRMATION FROM THE REQUEST BODY SO WE ARE NOT SERIALIZING THEM AND STORING INTO THE DB
        password = data.pop('password')
        password_confirmation = data.pop('password_confirmation')

        # CHECK IF THE PASSWORDS MATCH

        if password != password_confirmation:
            raise ValidationError({'password_confirmation' : 'Password do not match'})

        # CHECK IF THE PASSWORD IS VALID

        try:
            password_validation.validate_password(password=password)
        except ValidationError as err:
            raise ValidationError({'password': err})

        # HASH THE PASSWORD, AND ADD BACK TO THE DICTIONARY
        data['password'] = make_password(password)

        return data
      
    class Meta:
        model = User
        fields = ('id', 'username', 'password_confirmation', 'password', 'profile_image')