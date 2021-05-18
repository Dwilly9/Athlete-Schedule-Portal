from django.db import models

# Create your models here.
class Event(models.Model):
    _id = models.BigAutoField(primary_key=True)
    _partitionKey = models.CharField(max_length=14, default='masterSchedule', editable=False)
    title = models.CharField(max_length=30)
    team = models.CharField(max_length=50)
    facility = models.CharField(max_length=150)
    startDateTime = models.DateTimeField()
    endDateTime = models.DateTimeField()
