from django.db import models
from django.contrib.auth.models import User

class InterestMessage(models.Model):
    sender = models.ForeignKey(User, related_name='sent_interest_messages', on_delete=models.CASCADE)
    recipient = models.ForeignKey(User, related_name='received_interest_messages', on_delete=models.CASCADE)
    interest_message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Interest from {self.sender.username} to {self.recipient.username}"

    class Meta:
        verbose_name_plural = 'Interest Messages'
        ordering = ['timestamp']

class ChatMessage(models.Model):
    sender = models.ForeignKey(User, related_name='sent_messages', on_delete=models.CASCADE)
    recipient = models.ForeignKey(User, related_name='received_messages', on_delete=models.CASCADE)
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"From {self.sender.username} to {self.recipient.username}: {self.message}"

    class Meta:
        verbose_name_plural = 'Chat Messages'
        ordering = ['timestamp']
