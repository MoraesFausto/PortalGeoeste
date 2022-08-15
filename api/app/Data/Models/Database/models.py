from flask_sqlalchemy import SQLAlchemy
from app import db


class Legend(db.Model):
    __tablename__ = "legends"
    leg_id=db.Column(db.Integer(), primary_key=True)
    atr=db.Column(db.String(255), nullable=True)
    color=db.Column(db.String(8), nullable=True)
    leg_map_id=db.Column(db.String(255), db.ForeignKey('maps.map_id'), nullable=False)

class Map(db.Model):

    __tablename__ = "maps"
    map_id=db.Column(db.String(255), primary_key=True)
    map_desc=db.Column(db.String(255), nullable=False)
    map_atr=db.Column(db.String(255), nullable=True)
    map_ctg=db.Column(db.String(255), nullable=False)
    choropleth=db.Column(db.Integer(), nullable=True)

    map_subctg_id=db.Column(db.Integer(), db.ForeignKey('subcategories.subctg_id'), nullable=False)

    map_ref_id=db.Column(db.Integer(), db.ForeignKey('referency.ref_id'), nullable=False)
    map_refs=db.relationship('Referency', backref=db.backref('maps', lazy=True)) 

    map_legs=db.relationship('Legend', backref=db.backref('maps', lazy=True), order_by=Legend.leg_id)
    

    def db_execute(self, sql):
        res = db.session.execute(sql)
        return res

class SubCategory(db.Model):
    __tablename__ = "subcategories"
    subctg_id=db.Column(db.Integer(), primary_key=True)
    subctg_desc=db.Column(db.String(255), nullable=True)
    sub_ctg_id=db.Column(db.Integer(), db.ForeignKey('categories.ctg_id'), nullable=False)
    subctg_maps = db.relationship('Map', backref=db.backref('subcategories', lazy=True), order_by=Map.map_desc)


class Category(db.Model):
    __tablename__ = "categories"
    ctg_id=db.Column(db.Integer(), primary_key=True)
    ctg_desc=db.Column(db.String(255), nullable=True)
    ctg_subs = db.relationship('SubCategory', backref=db.backref('categories', lazy=True), order_by= SubCategory.subctg_desc)
    

class Referency(db.Model):
    __tablename__ = "referency"
    ref_id=db.Column(db.Integer(), primary_key=True)
    src=db.Column(db.String(255), nullable=True)
    fontes=db.Column(db.String(255), nullable=True)
    elaboracao=db.Column(db.String(255), nullable=True)


class Member(db.Model):
    __tablename__ = "members"
    id=db.Column(db.Integer(), primary_key=True)
    name=db.Column(db.String(255), nullable=True)
    lattes=db.Column(db.String(255), nullable=True)
    member_team_id=db.Column(db.Integer(), db.ForeignKey('team.id'), nullable=True)

class Team(db.Model):
    __tablename__ = "team"
    id=db.Column(db.Integer(), primary_key=True)
    description=db.Column(db.String(255), nullable=True)
    members=db.relationship('Member', backref=db.backref('team', lazy=True), order_by=Member.id)