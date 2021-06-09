from django.contrib.admin import site

from .models import Post, Video, Category, User


site.register([Post,Video,Category,User])  