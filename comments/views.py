from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticated
from django.core.exceptions import PermissionDenied

from .serializers.common import CommentSerializer
from comments.models import Comment

class CommentListView(APIView):
    permission_classes = (IsAuthenticated, )

    def post(self, request):
        request.data["owner"] = request.user.id
        comment_to_create = CommentSerializer(data=request.data)
        if comment_to_create.is_valid():
            comment_to_create.save()
            return Response(comment_to_create.data, status=status.HTTP_201_CREATED)
        return Response(comment_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class CommentDetailView(APIView):

    def delete(self, request, pk):
        try:
            comment_to_delete = Comment.objects.get(pk=pk) #MAKING SURE THAT EXIST
        except Comment.DoesNotExist:
            raise NotFound() # IF IT DOESN'T FOUND IT WILL TURN AN ERROR
        if comment_to_delete.owner != request.user:
            raise PermissionDenied()
        comment_to_delete.delete() # DELETE FROM TABLE
        return Response(status=status.HTTP_204_NO_CONTENT)