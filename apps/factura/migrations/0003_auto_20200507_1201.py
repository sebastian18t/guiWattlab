# Generated by Django 3.0.3 on 2020-05-07 17:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('factura', '0002_auto_20200507_1158'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cliente',
            name='fcha_ncmnto',
            field=models.DateField(null=True),
        ),
    ]
