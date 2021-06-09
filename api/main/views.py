from rest_framework import viewsets, status
from rest_framework.generics import GenericAPIView, UpdateAPIView
from rest_framework.status import *
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from .serializers import *
from django.contrib.auth.hashers import make_password



class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer

    def get_queryset(self):
        if self.request.query_params.dict():
            return Post.objects.filter(**self.request.query_params.dict())
        return Post.objects.all()


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserDetailSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategoryDetailSerializer


class VideoViewSet(viewsets.ModelViewSet):
    serializer_class = VideoSerializer

    def get_queryset(self):
        if self.request.query_params.dict():
            return Video.objects.filter(**self.request.query_params.dict())
        return Video.objects.all()

class UserSignIn(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user': UserDetailSerializer(user).data
        })

class UserSignUp(GenericAPIView):
    serializer_class = UserDetailSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        if serializer.is_valid():
            password = serializer.validated_data.get('password')
            serializer.validated_data['password']= make_password (password)
            user = serializer.save()
            token, created = Token.objects.get_or_create(user=user)
            if user:
               return Response({'token': token.key,'user': UserDetailSerializer(user).data})
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class UpdateProfileView(UpdateAPIView):

    queryset = User.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = UpdateUserSerializer