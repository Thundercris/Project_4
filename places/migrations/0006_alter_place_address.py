# Generated by Django 3.2.5 on 2021-07-30 10:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('places', '0005_alter_place_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='place',
            name='address',
            field=models.CharField(default=None, max_length=100),
        ),
    ]