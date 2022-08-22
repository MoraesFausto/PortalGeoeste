from flask import Flask, render_template, request, jsonify, session
from flask_restx import Api
from flask_cors import CORS
from passlib.hash import pbkdf2_sha256
from flask_session import Session
from .extensions import db, login_manager, data_ns
from .Auth.models import User
from .Data.data import data_ns

def register_extensions(app):
    db.init_app(app)
    login_manager.init_app(app)

def create_app(config):
    app=Flask(__name__, static_url_path='/', template_folder='templates')
    app.config.from_object(config)
    server_session = Session(app)

    @app.route('/api')
    def index():
        return  render_template('home.html')

    @app.route('/api/register', methods=['POST'])
    def register():
        email = request.json['email']
        pwd = request.json['password']

        user = User.query.filter_by(email=email).first()

        if user is not None:
            return jsonify({"Error":"Email ja cadastrado"}), 409
        if len(pwd) < 6 or len(pwd) > 10:
            return jsonify({"Error":"Insira uma senha de 6 a 8 caracteres"}), 401

        hashed=pbkdf2_sha256.hash(pwd)
        new_user = User(email=email, password=hashed)
        new_user.add_to_db()

        session["user_id"] = new_user.id

        return jsonify({
            "id": new_user.id,
            "email": new_user.email
        })

    @app.route('/api/login', methods=['POST'])
    def login():
        email = request.json['email']
        pwd = request.json['password']
        user = User.query.filter_by(email=email).first()
        if user is None:
            return jsonify({"Error":"Unauthorized"}), 401
        if not pbkdf2_sha256.verify(pwd, user.password):
            return jsonify({"Error":"Unauthorized"}), 401

        session["user_id"] = user.id

        return jsonify({
            "email":user.email,
            "id": user.id
        })

    @app.route("/api/perfil", methods=['GET'])
    def get_current_user():
        user_id = session.get("user_id")

        if not user_id:
            return jsonify({"Error":"Unauthorized"}), 401

        user = User.query.filter_by(id = user_id).first()
        return jsonify({
            "email":user.email,
            "id": user.id
        })

    @app.route("/api/logout", methods=['POST'])
    def logout():
        user_id = session.get("user_id")

        if not user_id:
            return jsonify({"Error":"Not logged in"}), 401
        session.pop("user_id")
        return "200"

    CORS(app)
    register_extensions(app)
    api=Api(app, doc="/docs")
    api.add_namespace(data_ns)

    return app

