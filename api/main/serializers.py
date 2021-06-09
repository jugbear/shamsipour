from rest_framework import serializers
from .models import Post, Category, Video, User

class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class CategoryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

    def to_representation(self, instance):
        self.fields['author'] =  UserDetailSerializer(read_only=True)
        self.fields['category'] =  CategoryDetailSerializer(read_only=True)
        return super(PostSerializer, self).to_representation(instance)

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'
    
    def to_representation(self, instance):
        self.fields['author'] =  UserDetailSerializer(read_only=True)
        self.fields['category'] =  CategoryDetailSerializer(read_only=True)
        return super(VideoSerializer, self).to_representation(instance)


class UpdateUserSerializer(serializers.ModelSerializer):


    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'StudentCode')
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True},
        }

    def validate_username(self, value):
        user = self.context['request'].user
        if User.objects.exclude(pk=user.pk).filter(username=value).exists():
            raise serializers.ValidationError({"username": "This username is already in use."})
        return value

    def update(self, instance, validated_data):
        instance.first_name = validated_data['first_name']
        instance.last_name = validated_data['last_name']
        instance.StudentCode = validated_data['StudentCode']
        instance.username = validated_data['username']
        instance.save()

        return instance