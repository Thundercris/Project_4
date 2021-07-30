from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

class Place(models.Model):
    name = models.CharField(max_length=50,default=None)
    address = models.CharField(max_length=100,default=None)
    phone_number = PhoneNumberField()
    website = models.CharField(max_length=50,default=None)
    image = models.CharField(max_length=500,default=None)
    is_pets_allowed = models.BooleanField(default=True, null=True)
    description = models.CharField(max_length=500)
    category = models.ManyToManyField(
        "categories.Category",
        related_name="places",
        blank=True,
    )
    owner  = models.ForeignKey(
      "jwt_auth.User",
      related_name="places",
      null=True,
      blank=True,
      on_delete=models.SET_NULL
    )


    def __str__(self):
        return f"{self.name} -  {self.is_pets_allowed}"
        