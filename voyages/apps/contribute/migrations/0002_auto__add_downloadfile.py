# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'DownloadFile'
        db.create_table('contribute_downloadfile', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('file', self.gf('django.db.models.fields.files.FileField')(max_length=100)),
            ('filetitle', self.gf('django.db.models.fields.CharField')(max_length=50)),
        ))
        db.send_create_signal('contribute', ['DownloadFile'])


    def backwards(self, orm):
        # Deleting model 'DownloadFile'
        db.delete_table('contribute_downloadfile')


    models = {
        'contribute.downloadfile': {
            'Meta': {'object_name': 'DownloadFile'},
            'file': ('django.db.models.fields.files.FileField', [], {'max_length': '100'}),
            'filetitle': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'})
        },
        'contribute.lessonplanfile': {
            'Meta': {'object_name': 'LessonPlanFile'},
            'file': ('django.db.models.fields.files.FileField', [], {'max_length': '100'}),
            'filetitle': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'lesson': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['education.LessonPlan']"})
        },
        'contribute.otherfile': {
            'Meta': {'object_name': 'OtherFile'},
            'file': ('django.db.models.fields.files.FileField', [], {'max_length': '100'}),
            'filenote': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'filetitle': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'})
        },
        'education.lessonplan': {
            'Meta': {'object_name': 'LessonPlan'},
            'abstract': ('django.db.models.fields.CharField', [], {'max_length': '1000'}),
            'author': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            'course': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            'grade_level': ('django.db.models.fields.CharField', [], {'max_length': '50'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'key_words': ('django.db.models.fields.CharField', [], {'max_length': '200'}),
            'order': ('django.db.models.fields.IntegerField', [], {}),
            'text': ('django.db.models.fields.CharField', [], {'max_length': '100'})
        }
    }

    complete_apps = ['contribute']