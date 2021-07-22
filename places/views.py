from rest_framework.views import APIView #CLASS WHICH FACILITATES SENDING BACK JSON
from rest_framework.response import Response #METHOD TO SEND BACK A RESPONSE
from rest_framework import status #METHOD TO SEND BACK A STATUS CODE

from  .models import Place
from  .serializers import PlaceSerializer

class PlaceListView(APIView):

    def get(self, _request):
        places = Place.objects.all() #GET EVERYTHING FROM THE PLACES TABLE IN THE DATABASE
        serializers_places = PlaceSerializer(places, many=True) # RUN THROUGH THE STERILISER IN ORDER TO TRANSFORM THE DATA FROM SQL WHICH RETURNS A QUERY SET INTO PYTHON
        return Response(serializers_places.data, status=status.HTTP_200_OK) #RETURN RESPONSE TO THE USER AND THE STATUS CODE