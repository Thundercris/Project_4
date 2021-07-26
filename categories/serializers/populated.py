from .common import CategorySerializer
from places.serializers.common import PlaceSerializer

class PopulatedCategorySerializer(CategorySerializer):
    places = PlaceSerializer(many=True)