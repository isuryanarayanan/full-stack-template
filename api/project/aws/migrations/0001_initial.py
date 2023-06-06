# Generated by Django 4.1.4 on 2023-05-24 03:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SESEmailTemplate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('template_identifier', models.CharField(choices=[('WelcomeTemplate', 'WelcomeTemplate'), ('EmailVerificationTemplate', 'EmailVerificationTemplate'), ('EmailVerificationSuccessTemplate', 'EmailVerificationSuccessTemplate'), ('ForgotPasswordTemplate', 'ForgotPasswordTemplate'), ('ForgotPasswordSuccessTemplate', 'ForgotPasswordSuccessTemplate'), ('ValidationTemplate', 'ValidationTemplate'), ('ValidationSuccessTemplate', 'ValidationSuccessTemplate'), ('ResetPasswordTemplate', 'ResetPasswordTemplate'), ('ResetPasswordSuccessTemplate', 'ResetPasswordSuccessTemplate')], max_length=250, unique=True)),
                ('template_subject', models.TextField()),
                ('template_text_part', models.FileField(upload_to='aws/ses/templates/txt/')),
                ('template_html_part', models.FileField(upload_to='aws/ses/templates/html/')),
                ('template_keys', models.JSONField(default=dict)),
            ],
        ),
        migrations.CreateModel(
            name='TemplatedEmail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('template_data', models.JSONField(default=dict)),
                ('status', models.CharField(choices=[('PENDING', 'PENDING'), ('SENT', 'SENT'), ('FAILED', 'FAILED')], default='PENDING', max_length=250)),
                ('template', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='aws.sesemailtemplate')),
            ],
        ),
    ]
