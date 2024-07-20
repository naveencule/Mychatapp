from rest_framework import serializers
from .models import InterestMessage, ChatMessage

class InterestMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = InterestMessage
        fields = '__all__'

class ChatMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatMessage
        fields = '__all__'
