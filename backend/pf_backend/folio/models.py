from django.db import models

class ContactMessage(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    email = models.EmailField()
    contact = models.CharField(max_length=15)  # phone number, max 15 digits
    message = models.TextField()

    def __str__(self):
        return f"{self.firstname} {self.lastname} - {self.email}"
