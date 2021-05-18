from django.contrib import admin
from .models import Event

# Register your models here.
class EventAdmin(admin.ModelAdmin):
    list_display = ("title", "team", "facility", "startDateTime", "endDateTime")
# Register the same model
admin.site.register(Event, EventAdmin)
