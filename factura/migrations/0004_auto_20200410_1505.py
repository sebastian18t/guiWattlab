# Generated by Django 3.0.4 on 2020-04-10 15:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('factura', '0003_auto_20200329_2323'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='banco',
            name='cnsctvo_cdd',
        ),
        migrations.RemoveField(
            model_name='ciudad',
            name='cnsctvo_dprtmnto',
        ),
        migrations.RemoveField(
            model_name='cliente',
            name='cnsctvo_gnro',
        ),
        migrations.RemoveField(
            model_name='cliente',
            name='cnsctvo_tpo_clnte',
        ),
        migrations.RemoveField(
            model_name='cliente',
            name='cnsctvo_tpo_idntfcn',
        ),
        migrations.RemoveField(
            model_name='consumo',
            name='cnsctvo_scrsl_clnte',
        ),
        migrations.DeleteModel(
            name='EstadoFactura',
        ),
        migrations.DeleteModel(
            name='EstadoSucursalCliente',
        ),
        migrations.RemoveField(
            model_name='facturacion',
            name='cnsctvo_cnsmo',
        ),
        migrations.RemoveField(
            model_name='pago',
            name='cnsctvo_fctra',
        ),
        migrations.RemoveField(
            model_name='pago',
            name='nmro_unco_idntfccn_bnco',
        ),
        migrations.RemoveField(
            model_name='pago',
            name='nmro_unco_idntfccn_usro',
        ),
        migrations.RemoveField(
            model_name='subestacion',
            name='cnsctvo_cdd',
        ),
        migrations.RemoveField(
            model_name='sucursalcliente',
            name='cnsctvo_cdd',
        ),
        migrations.RemoveField(
            model_name='sucursalcliente',
            name='nmro_unco_idntfccn_clnte',
        ),
        migrations.RemoveField(
            model_name='sucursalcliente',
            name='nmro_unco_idntfccn_trnsfrmdr',
        ),
        migrations.DeleteModel(
            name='Tarifa',
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='cnsctvo_tpo_usrio',
        ),
        migrations.RemoveField(
            model_name='usuarioestadovigencia',
            name='cnsctvo_estdo_usro',
        ),
        migrations.RemoveField(
            model_name='usuarioestadovigencia',
            name='nmro_unco_idntfccn_usro',
        ),
        migrations.DeleteModel(
            name='Banco',
        ),
        migrations.DeleteModel(
            name='ciudad',
        ),
        migrations.DeleteModel(
            name='Cliente',
        ),
        migrations.DeleteModel(
            name='Consumo',
        ),
        migrations.DeleteModel(
            name='departamento',
        ),
        migrations.DeleteModel(
            name='EstadoUsuario',
        ),
        migrations.DeleteModel(
            name='Facturacion',
        ),
        migrations.DeleteModel(
            name='Genero',
        ),
        migrations.DeleteModel(
            name='Pago',
        ),
        migrations.DeleteModel(
            name='SubEstacion',
        ),
        migrations.DeleteModel(
            name='SucursalCliente',
        ),
        migrations.DeleteModel(
            name='tipoCliente',
        ),
        migrations.DeleteModel(
            name='TipoIdentificacion',
        ),
        migrations.DeleteModel(
            name='TipoUsuario',
        ),
        migrations.DeleteModel(
            name='Transformador',
        ),
        migrations.DeleteModel(
            name='Usuario',
        ),
        migrations.DeleteModel(
            name='UsuarioEstadoVigencia',
        ),
    ]
