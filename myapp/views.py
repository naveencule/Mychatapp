from django.http import HttpResponse
from rest_framework import viewsets
from .models import InterestMessage, ChatMessage
from .serializers import InterestMessageSerializer, ChatMessageSerializer

# View for the home page
def home(request):
    return HttpResponse("Welcome to the Home Page")

# ViewSet for handling InterestMessage API
class InterestMessageViewSet(viewsets.ModelViewSet):
    queryset = InterestMessage.objects.all()
    serializer_class = InterestMessageSerializer

# ViewSet for handling ChatMessage API
class ChatMessageViewSet(viewsets.ModelViewSet):
    queryset = ChatMessage.objects.all()
    serializer_class = ChatMessageSerializer
