FROM python:3.8.5-slim-buster

# Environment variables
ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1
ENV TZ="Asia/Kolkata"
ENV PATH="/home/user/.local/bin:$PATH"


# Setup working directory
RUN mkdir /app
COPY ./project /app

# Essential directories and files
RUN mkdir -p /vol/web/media
RUN mkdir -p /vol/web/static

# Run the app
RUN cd /app
WORKDIR /app

# Install the dependencies
RUN pip install --upgrade pip
RUN pip install -r /app/requirements.txt

ARG USER_ID
ARG GROUP_ID

USER root

RUN addgroup --gid $GROUP_ID user
RUN adduser --disabled-password --gecos '' --uid $USER_ID --gid $GROUP_ID user
USER user
