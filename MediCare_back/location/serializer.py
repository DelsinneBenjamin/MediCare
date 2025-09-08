from rest_framework import serializers

from location.models import Address, Site


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ['street', 'city']


class SiteSerializer(serializers.ModelSerializer):
    address = AddressSerializer(many=True)  # nested serializer

    class Meta:
        model = Site
        fields = ['id', 'name', 'site_type', 'address']

    def create(self, validated_data):
        addresses_data = validated_data.pop('address', [])
        site = Site.objects.create(**validated_data)

        # Création des adresses et liaison
        for addr_data in addresses_data:
            address = Address.objects.create(**addr_data)
            site.address.add(address)

        return site

    def update(self, instance, validated_data):
        addresses_data = validated_data.pop('address', [])
        instance.name = validated_data.get('name', instance.name)
        instance.site_type = validated_data.get('site_type', instance.site_type)
        instance.save()

        if addresses_data:
            instance.address.clear()  # on supprime les anciennes adresses
            for addr_data in addresses_data:
                address = Address.objects.create(**addr_data)
                instance.address.add(address)

        return instance
