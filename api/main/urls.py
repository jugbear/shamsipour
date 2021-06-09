from django.conf import settings
from django.conf.urls.static import static
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token

from .views import CategoryViewSet, PostViewSet, VideoViewSet, UserSignUp, UserSignIn, UpdateProfileView, UserViewSet

router = DefaultRouter()
router.register('post', PostViewSet, 'post')
router.register('category', CategoryViewSet, 'category')
router.register('video', VideoViewSet, 'video')
router.register('users', UserViewSet, 'users')


urlpatterns = [
    path('', include(router.urls)),
    path('signup',UserSignUp.as_view(), name='SignUp'),
    path('signin',UserSignIn.as_view(), name='SignIn'),
    path('update/<int:pk>/', UpdateProfileView.as_view(), name='auth_update_profile'),

]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
