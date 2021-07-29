from rest_framework.views import  APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers.populated import PopulatedCategorySerializer
from .models import Category

class CategoryListView(APIView):

    def get(self, _request):
        categories = Category.objects.all()
        # print('categories', categories)
        serialized_categories = PopulatedCategorySerializer(categories, many=True)
        # print('serialized', serialized_categories)
        return Response(serialized_categories.data, status=status.HTTP_200_OK) 