# Generated by Django 3.2.5 on 2021-07-25 22:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('places', '0002_place_description'),
        ('categories', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Categories',
            new_name='Category',
        ),
    ]