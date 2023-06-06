"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from accounts.views import accounts_graphql_view
from otp.views import otp_graphql_view
from games.views import games_graphql_view
from profiles.views import profile_graphql_view, ProfilePictureView
from settings.views import settings_graphql_view
from actions.views import actions_graphql_view
from posts.views import posts_graphql_view, PostView
from notify.views import notification_graphql_view
from feed.views import FeedView
from chat.views import chat_graphql_view
from timer.views import countdown_graphql_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', accounts_graphql_view),
    path('otp/', otp_graphql_view),
    path('games/', games_graphql_view),
    path('profiles/', profile_graphql_view),
    path('settings/', settings_graphql_view),
    path('actions/', actions_graphql_view),
    path('posts/', posts_graphql_view),
    path('notification/', notification_graphql_view),
    # path('index/', index, name="index"),
    # path('firebase-messaging-sw.js', showFirebaseJS, name="show_firebase_js"),
    path('post/', PostView.as_view(), name='post'),
    path('feed/', FeedView.as_view(), name='feed'),
    path('upload-profile-picture/', ProfilePictureView.as_view(),
         name='upload-profile-picture'),
    path('chat/', chat_graphql_view),
    path('countdown/', countdown_graphql_view),
]
