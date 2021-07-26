from rest_framework.exceptions import NotFound
from comments.models import Comment
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import request, status

from .serializers.common import CommentSerializer

class CommentListView(APIView):

      def post(self, request):
          comment_to_create = CommentSerializer(data=request.data)
          if comment_to_create.is_valid():
              comment_to_create.save()
              return Response(comment_to_create.data, status=status.HTTP_201_CREATED)
          return Response(comment_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class CommentDetailView(APIView):

      def delete(self, _request, pk):
        try:
            comment_to_delete = Comment.objects.get(pk=pk) #MAKING SURE THAT EXIST
        except Comment.DoesNotExist:
          raise NotFound(detail="Comment not found") # IF IT DOESN'T FOUND IT WILL  TURN AN ERROR
        comment_to_delete.delete() # DELETE FROM TABLE
        return Response(status=status.HTTP_204_NO_CONTENT)