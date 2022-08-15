from flask_restx import Namespace
import redis
from os import environ


class config(object):
    SECRET_KEY=environ.get('SECRET_KEY')
    SQLALCHEMY_DATABASE_URI=environ.get('SQLALCHEMY_DATABASE_URI')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECURITY_USER_IDENTITY_ATTRIBUTE = ('username','email')

    SESSION_TYPE = 'redis'
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True
    SESSION_REDIS = redis.from_url(environ.get('REDIS_URL'))
    data_ns=Namespace('Data')

