from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import InterestMessageViewSet, ChatMessageViewSet

router = DefaultRouter()
router.register(r'interest-messages', InterestMessageViewSet)
router.register(r'chat-messages', ChatMessageViewSet)

urlpatterns = [
    path('', include(router.urls)),  # This includes the router's URLs
]
