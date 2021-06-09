from django.db.models import Model, CharField, ImageField, DateTimeField, ForeignKey, CASCADE
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
   StudentCode = CharField(max_length=200, blank=True, null=True)
   # you can add more fields here.

class Category(Model):
    name = CharField(max_length=100)
    image = ImageField()


class Post(Model):
    title = CharField(max_length=100) 
    content = CharField(max_length=1000)
    cover = ImageField()
    category = ForeignKey(Category,on_delete=CASCADE)
    author = ForeignKey(User,on_delete=CASCADE)
    create = DateTimeField(auto_now_add=True)
    modify = DateTimeField(auto_now=True)


class Video(Model):
    title = CharField(max_length=100)
    desc = CharField(max_length=100)
    content_url = CharField(max_length=300) 
    category = ForeignKey(Category,on_delete=CASCADE)
    author = ForeignKey(User,on_delete=CASCADE)
    create = DateTimeField(auto_now_add=True)
    modify = DateTimeField(auto_now=True)
    thumbnail = ImageField()
