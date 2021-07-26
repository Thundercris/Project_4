from categories.models import Category
from comments.serializers.common import CommentSerializer
from categories.serializers.common import CategorySerializer
from .common import PlaceSerializer

class PopulatedPlaceSerializer(PlaceSerializer):  #PASS PLACE OBJECT THROUGH
    comments = CommentSerializer(many=True)
    # ADDING A FIELD TO THEPLACE OBJECT CALLED COMMENTS
    # AND THAT FIELD IS GOING TO POPULATE USING THIS COMMON STERIALISER, WHICH ON ITS OWN CONVERTS
    # THAT TABLE RESPONSE TO AN  OBJECT, IN THIS WAY WE HAVE AN OBJECT FOR ALL COMMENTS.
    category = CategorySerializer(many=True) # ADDING A FIELD TO THE PLACE OBJECT CALLED CATEGORIES