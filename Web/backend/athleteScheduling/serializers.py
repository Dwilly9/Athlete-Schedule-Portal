from rest_framework import serializers
from .models import Event

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('_id', '_partitionKey', 'title', 'team', 'facility', 'startDateTime', 'endDateTime')