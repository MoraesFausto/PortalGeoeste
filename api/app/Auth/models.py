from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy
from app import db, login_manager

class User(UserMixin, db.Model):

    __tablename__ = "users"
    id=db.Column(db.Integer, primary_key=True)
    email=db.Column(db.String(), nullable=False)
    password=db.Column(db.String(), nullable=False)

    def __repr__(self):
        return str(self.email)

    def add_to_db(self):
        db.session.add(self)
        self.db_commit()

    def delete_from_db(self):
        db.session.delete(self)
        self.db_commit()

    def db_commit(self):
        db.session.commit()


@login_manager.user_loader
def user_loader(id):
    return User.query.get(int(id))


@login_manager.request_loader
def request_loader(request):
    email = request.form.get('email')
    user = User.query.filter_by(email=email).first()
    return user if user else None