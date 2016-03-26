# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-03-26 12:50
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('voyage', '0002_auto_20151210_0937'),
        ('contribute', '0004_auto_20160317_1434'),
    ]

    operations = [
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_century_in_which_voyage_occurred',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_decade_in_which_voyage_occurred',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_first_region_of_embarkation_of_slaves',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='+', to='voyage.Region'),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_first_region_of_slave_landing',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='+', to='voyage.Region'),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_length_of_middle_passage',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_mortality_rate',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_national_carrier',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='+', to='voyage.Nationality'),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_number_of_slaves_embarked_for_mortality_calculation',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_outcome_of_voyage_for_owner',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='+', to='voyage.OwnerOutcome'),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_outcome_of_voyage_for_slaves',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='+', to='voyage.SlavesOutcome'),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_outcome_of_voyage_if_ship_captured',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='+', to='voyage.VesselCapturedOutcome'),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_port_where_voyage_began',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='+', to='voyage.Place'),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_principal_place_of_slave_purchase',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='+', to='voyage.Place'),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_principal_port_of_slave_disembarkation',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='+', to='voyage.Place'),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_quarter_century_in_which_voyage_occurred',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_quinquennium_in_which_voyage_occurred',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_region_ship_constructed',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='+', to='voyage.Region'),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_region_where_voyage_began',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='+', to='voyage.Region'),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_second_region_of_embarkation_of_slaves',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='+', to='voyage.Region'),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_second_region_of_slave_landing',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='+', to='voyage.Region'),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_standardized_price_of_slaves',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_standardized_tonnage',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_third_region_of_embarkation_of_slaves',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='+', to='voyage.Region'),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_third_region_of_slave_landing',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='+', to='voyage.Region'),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_total_slave_deaths_during_middle_passage',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_total_slaves_disembarked',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_total_slaves_embarked',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_voyage_groupings_for_estimating_imputed_slaves',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='+', to='voyage.VoyageGroupings'),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_voyage_length_home_port_to_first_port_of_disembarkation',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_year_arrived_at_port_of_disembarkation',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_year_departed_africa',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='interimvoyage',
            name='imputed_year_voyage_began',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='reviewvoyagecontribution',
            name='request',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='review_contribution', to='contribute.ReviewRequest'),
        ),
    ]
