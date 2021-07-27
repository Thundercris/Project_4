from django.db import models


class Comment(models.Model):
    text  = models.TextField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)
    place = models.ForeignKey(
        "places.Place", #DEFINE HOW THE RELATIONSHIP IS GOING TO BE 
        related_name = "comments", #NAME OF THE COLUMN IN THE PLACE LOOKUP
        on_delete = models.CASCADE #IF THE PLACE IS DELETED THEN ALSO THE COMMENTS WILL BE DELETED
    )
    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name="comments",
        on_delete= models.CASCADE 
    )

    def __str__(self):
        return f"Comments: {self.text}"