"""
Django settings for development configuration.
"""

from pathlib import Path
from datetime import timedelta
import os

import django
from django.utils.encoding import force_str
django.utils.encoding.force_text = force_str

# ----------------
# Django settings
# ----------------

BASE_DIR = Path(__file__).resolve().parent.parent.parent
SECRET_KEY = os.environ.get(
    'DJANGO_SECRET_KEY', 'django-insecure-jz4%bt0*ninfa7p@g4&_431s#upnn8_u16_9^rl_x(9pqckaq_')
DEBUG = os.environ.get('DJANGO_DEBUG', 'True') == 'True'

# Enable HTTPS redirection to ensure that login page and other sensitive pages are served over a secure connection
# SECURE_SSL_REDIRECT = True
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
CSRF_COOKIE_DOMAIN = '.genie.in'


# ----------------
# AWS Credentials
# ----------------

AWS_ACCESS_KEY_ID = os.environ.get(
    "AWS_ACCESS_KEY_ID", default='AKIAIOSFODNN7EXAMPLE')
AWS_SECRET_ACCESS_KEY = os.environ.get(
    "AWS_SECRET_ACCESS_KEY", default='wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY')
AWS_REGION = os.environ.get("AWS_REGION", default='ap-south-1')

# ----------------
# Oauth Credentials
# ----------------
SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = os.environ.get(
    'DJANGO_SOCIAL_AUTH_GOOGLE_OAUTH2_KEY', 'GOOGLE_OAUTH2_KEY')
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = os.environ.get(
    'DJANGO_SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET', 'GOOGLE_OAUTH2_SECRET')


# ----------------
# SES settings
# ----------------

EMAIL_BACKEND = 'project.production.ses_backend.SESBackend'
AWS_SES_REGION = os.environ.get("AWS_SES_REGION", default='ap-south-1')

DEFAULT_NOTIFICATION_EMAIL = 'support@teamgenie.in'

# ----------------
# AWS S3 Bucket
# ----------------

AWS_STORAGE_BUCKET_NAME = os.environ.get(
    "AWS_S3_BUCKET", default='production-genie')
AWS_S3_REGION = os.environ.get("AWS_S3_REGION", default='ap-south-1')
AWS_S3_CUSTOM_DOMAIN = f'{AWS_STORAGE_BUCKET_NAME}.s3.amazonaws.com'
AWS_S3_OBJECT_PARAMETERS = {
    'CacheControl': 'max-age=86400',
}

# ----------------
# AWS S3 Bucket Static Files and Media
# ----------------

AWS_LOCATION = 'static'
AWS_DEFAULT_ACL = 'public-read'
STATIC_URL = f'https://{AWS_S3_CUSTOM_DOMAIN}/{AWS_LOCATION}/'

MEDIAFILES_LOCATION = 'media'
MEDIA_URL = f'https://{AWS_S3_CUSTOM_DOMAIN}/{MEDIAFILES_LOCATION}/'

STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
DEFAULT_FILE_STORAGE = 'project.development.storage_backend.MediaStorage'

# ----------------
# Redis settings
# ----------------

REDIS_HOST = os.getenv('REDIS_HOST', 'redis')
REDIS_PORT = os.getenv('REDIS_PORT', 6379)
REDIS_DB = os.getenv('REDIS_DB', 0)

# ----------------
# Celery settings
# ----------------

CELERY_BROKER_URL = f'redis://{REDIS_HOST}:{REDIS_PORT}/{REDIS_DB}'
CELERY_ACCEPT_CONTENT = ['application/json']
CELERY_RESULT_BACKEND = f'redis://{REDIS_HOST}:{REDIS_PORT}/{REDIS_DB}'
CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'
CELERY_TIMEZONE = 'Asia/Kolkata'


# ----------------
# Django settings
# ----------------
AUTH_USER_MODEL = 'accounts.User'

# Append to the allowed hosts if the environment variable is set
ALLOWED_HOSTS = [
    'development-genie.ap-south-1.elasticbeanstalk.com',
    'apiproductionmedia-env.eba-2cnkbm8m.ap-south-1.elasticbeanstalk.com',
    'localhost',
    '127.0.0.1',
    'api.genie.in',
    'nlb-genie-development-b5b6cb82afcaee0b.elb.ap-south-1.amazonaws.com',
    'developmentgeniefr-env.eba-xeeu6xpn.ap-south-1.elasticbeanstalk.com',
]
if 'DJANGO_ALLOWED_HOSTS' in os.environ:
    ALLOWED_HOSTS += os.environ['DJANGO_ALLOWED_HOSTS'].split(',')
    ALLOWED_HOSTS = list(set(ALLOWED_HOSTS))

INSTALLED_APPS = [

    # Local Apps
    'daphne',
    'channels',
    'channels_redis',
    'storages',
    'corsheaders',
    'graphene_django',
    'rest_framework',
    'redis',

    # Django Apps
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Project Apps
    'accounts.apps.AccountsConfig',
    'otp.apps.OtpConfig',
    'consumer.apps.ConsumerConfig',
    'aws.apps.AwsConfig'
]

# Cors headers
CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOWED_ORIGINS = [
    'http://www.genie.in',
    'http://genie.in',
    'http://localhost:5173',
    'http://developmentgenie2fr-env.eba-xeeu6xpn.ap-south-1.elasticbeanstalk.com'
]

MIDDLEWARE = [
    # Cors middleware
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',

    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'project.production.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

ASGI_APPLICATION = 'project.production.asgi.application'
# WSGI_APPLICATION = 'project.production.wsgi.application'

CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels_redis.core.RedisChannelLayer",
        "CONFIG": {
            "hosts": [(REDIS_HOST, REDIS_PORT)],
        },
    },
}


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': os.environ.get("AWS_RDS_DB_NAME", default='PRODUCTION'),
        'USER': os.environ.get("AWS_RDS_DB_USER", default='production'),
        'PASSWORD': os.environ.get("AWS_RDS_DB_PASSWORD", default='production_genie'),
        'HOST': os.environ.get("AWS_RDS_DB_HOST", default='api-rds-production-media.cvb0paim4rp4.ap-south-1.rds.amazonaws.com'),
        'PORT': os.environ.get("AWS_RDS_DB_PORT", default='5432'),
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Asia/Kolkata'

USE_I18N = True

USE_TZ = True

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10
}

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=60),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=365),
    'ROTATE_REFRESH_TOKENS': False,
    'BLACKLIST_AFTER_ROTATION': False,
    'UPDATE_LAST_LOGIN': False,

    'ALGORITHM': 'HS256',
    'SIGNING_KEY': SECRET_KEY,
    'VERIFYING_KEY': None,
    'AUDIENCE': None,
    'ISSUER': None,
    'JWK_URL': None,
    'LEEWAY': 0,

    'AUTH_HEADER_TYPES': ('JWT',),
    'AUTH_HEADER_NAME': 'HTTP_AUTHORIZATION',
    'USER_ID_FIELD': 'id',
    'USER_ID_CLAIM': 'user_id',
    'USER_AUTHENTICATION_RULE': 'rest_framework_simplejwt.authentication.default_user_authentication_rule',

    'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken',),
    'TOKEN_TYPE_CLAIM': 'token_type',
    'TOKEN_USER_CLASS': 'rest_framework_simplejwt.models.TokenUser',

    'JTI_CLAIM': 'jti',

    'SLIDING_TOKEN_REFRESH_EXP_CLAIM': 'refresh_exp',
    'SLIDING_TOKEN_LIFETIME': timedelta(hours=6),
    'SLIDING_TOKEN_REFRESH_LIFETIME': timedelta(days=365),
}
# Fire Base configuration
FIRE_BASE_SECRET_KEY_PATH = os.path.join('../firebase.json')
