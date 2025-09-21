from rest_framework import serializers
from .models import Medicament, Ordonnance, OrdonnanceMedicament

class MedicamentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medicament
        fields = ['id', 'name_m']

# (pour inclure quantity)
class OrdonnanceMedicamentSerializer(serializers.ModelSerializer):
    medicament = MedicamentSerializer()  # nested pour montrer le médicament

    class Meta:
        model = OrdonnanceMedicament
        fields = ['id', 'medicament', 'quantity']

class OrdonnanceSerializer(serializers.ModelSerializer):
    medicaments = OrdonnanceMedicamentSerializer(source='ordonnancemedicament_set', many=True, read_only=True)

    class Meta:
        model = Ordonnance
        fields = ['id', 'date_o', 'contentReport_o', 'medicaments']

# créer/mettre à jour une ordonnance
class OrdonnanceCreateUpdateSerializer(serializers.ModelSerializer):
    medicaments = serializers.ListField(
        child=serializers.DictField(), write_only=True
    )

    class Meta:
        model = Ordonnance
        fields = ['id', 'date_o', 'contentReport_o', 'medicaments']

    #A savoir : lorsqu'on mets validate_ dans le nom d'une fonction, DRF reconnais automatiquement et l'appelera lorsqu'on fera un
    # serializer.is_valid... , cette fonction m'accepter un médicament uniquement s'il existe.. sinon bah il existe pas lol
    def validate_medicaments(self, value):
        for med in value:
            if not Medicament.objects.filter(id=med['id']).exists():
                raise serializers.ValidationError(f"Médicament avec id={med['id']} inexistant.")
        return value

    def create(self, validated_data):
        meds_data = validated_data.pop('medicaments', [])
        ordonnance = Ordonnance.objects.create(**validated_data)
        for med in meds_data:
            medicament = Medicament.objects.get(id=med['id'])
            OrdonnanceMedicament.objects.create(
                ordonnance=ordonnance,
                medicament=medicament,
                quantity=med['quantity']
            )
        return ordonnance

    def update(self, instance, validated_data):
        meds_data = validated_data.pop('medicaments', [])
        instance.date_o = validated_data.get('date_o', instance.date_o)
        instance.contentReport_o = validated_data.get('contentReport_o', instance.contentReport_o)
        instance.save()

        if meds_data:
            instance.ordonnancemedicament_set.all().delete()
            for med in meds_data:
                medicament = Medicament.objects.get(id=med['id'])
                OrdonnanceMedicament.objects.create(
                    ordonnance=instance,
                    medicament=medicament,
                    quantity=med['quantity']
                )
        return instance