from rest_framework import serializers
from api.models import University

class UniSerializer(serializers.ModelSerializer):
    class Meta:
        model = University
        fields = ('title',)
