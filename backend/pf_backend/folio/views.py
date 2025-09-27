# folio/views.py
from rest_framework import generics
from .models import ContactMessage
from .serializer import ContactMessageSerializer

class ContactView(generics.ListCreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
