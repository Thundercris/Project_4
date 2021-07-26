from rest_framework.exceptions import NotFound
from rest_framework.views import APIView #CLASS WHICH FACILITATES SENDING BACK JSON
from rest_framework.response import Response #METHOD TO SEND BACK A RESPONSE
from rest_framework import status #METHOD TO SEND BACK A STATUS CODE

from  .models import Place
from .serializers.common import PlaceSerializer
from  .serializers.populated import PopulatedPlaceSerializer

class PlaceListView(APIView):

    def get(self, _request): #GET ALL
        places = Place.objects.all() #GET EVERYTHING FROM THE PLACES TABLE IN THE DATABASE
        serializers_places = PopulatedPlaceSerializer(places, many=True) # RUN THROUGH THE STERILISER IN ORDER TO TRANSFORM THE DATA FROM SQL WHICH RETURNS A QUERY SET INTO PYTHON
        return Response(serializers_places.data, status=status.HTTP_200_OK) #RETURN RESPONSE TO THE USER AND THE STATUS CODE

    def post(self, request):
        place_to_add = PlaceSerializer(data=request.data)
        if place_to_add.is_valid():
            place_to_add.save()
            return Response(place_to_add.data, status=status.HTTP_201_CREATED)
        return Response(place_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class PlaceDetailView(APIView): 

    def get_place (self, pk):
        try:
            return Place.objects.get(pk=pk)
        except Place.DoesNotExist:
            raise NotFound(detail="Can't find that place")

    def get(self, _request, pk):
        place = self.get_place(pk=pk)
        serializers_place = PopulatedPlaceSerializer(place)
        return Response(serializers_place.data, status=status.HTTP_200_OK)
    
    def delete(self, _request, pk):
        place_to_delete = self.get_place(pk=pk)
        place_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    def put(self,request, pk):
        place_to_edit = self.get_place(pk=pk)
        updated_place = PlaceSerializer(place_to_edit, data=request.data)
        if  updated_place.is_valid():
              updated_place.save()
              return Response(updated_place.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_place.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)