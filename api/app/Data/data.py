import geopandas as gpd
from flask_restx import Resource
from flask import session
from configs.Configs import config
from .Models.Database.models import Map, Category, Referency, SubCategory, Legend, Member, Team
from .Models.Marshall.marshall import map_model, category_model, subcategory_model, referency_model, legend_model, member_model, team_model
from flask import request, json, send_file
from app import data_ns


@data_ns.marshal_list_with(map_model)
def ReturnMap(mapa):
    return mapa


@data_ns.marshal_list_with(category_model)
def ReturnCategory(ctg):
    return ctg


@data_ns.marshal_list_with(subcategory_model)
def ReturnSubCategory(subctg):
    return subctg
    

@data_ns.marshal_list_with(referency_model)
def ReturnReferency(ref):
    return ref


@data_ns.marshal_list_with(legend_model)
def ReturnLegend(leg):
    return leg


@data_ns.marshal_list_with(member_model)
def ReturnMember(memb):
    return memb


@data_ns.marshal_list_with(team_model)
def ReturnTeam(team):
    return team


@data_ns.route('/mapas')
class MapResource(Resource):
    def get(self):
        maps=Map.query.order_by(Map.map_desc).all()
        
        if maps:
            return ReturnMap(maps)
        else:
            return {"Error":"Not found"}, 404


@data_ns.route('/mapas/<string:id>')
class MapResource(Resource):
    def get(self, id):
        mapa=Map.query.filter_by(map_id=id).first()
        
        if mapa:
            return ReturnMap(mapa)
        else:
            return {"Error":"Not found"}, 404


@data_ns.route('/mapas/resource/<string:id>')
class MapResource(Resource):
    def get(self, id):
        mapa=Map.query.filter_by(map_id=id).first()

        if mapa and mapa.choropleth != 1:
            if mapa.map_atr:
                if mapa.map_ctg:
                    sql='SELECT geometry, colors, NOME, atr  FROM ' + mapa.map_id
                else:
                    sql='SELECT geometry, colors, atr FROM ' + mapa.map_id

            else:
                sql='SELECT geometry from ' + mapa.map_id
            df=gpd.read_postgis(sql, config.SQLALCHEMY_DATABASE_URI, geom_col='geometry')
            geodf=df.to_json()
            return geodf
        else:
            return {"Error":"No data found"}, 404


@data_ns.route('/mapas/legenda/<string:id>')
class LegendResource(Resource):
    def get(self, id):
        mapa=Legend.query.filter_by(leg_map_id=id).all()
        
        if mapa:
            return ReturnLegend(mapa)
        else:
            return {"Error":"No data found"}, 404


@data_ns.route('/mapas/<string:id>/download')
class MapResource(Resource):
    def get(self, id):
        user_id = session.get("user_id")
        
        if not user_id:
            return {"Error":"Unauthorized"}, 401

        mapa=Map.query.filter_by(map_id=id).first()

        if mapa:
            if not mapa.map_ctg:
                return send_file('Data/repository/' + id+'.zip', as_attachment=True)
            else:
                return send_file('Data/repository/' + mapa.map_ctg + '.zip', as_attachment=True)
        else:
            return {"Error":"No data found"}, 404


@data_ns.route('/mapas/categorias/<int:id>')
class CategoryResource(Resource):
    def get(self, id):      
        cat =Category.query.get_or_404(id)
        
        if cat:
            return ReturnCategory(cat)
        else:
            return {"Error":"No data found"}, 404


@data_ns.route('/mapas/categorias')
class CategoryResource(Resource):
    def get(self):
        ctg=Category.query.order_by(Category.ctg_desc).all()

        if ctg:
            return ReturnCategory(ctg)
        else:
            return {"Error":"Not found"}, 404

@data_ns.route('/mapas/subcategorias')
class SubCategoryResource(Resource):
    def get(self):
        subctg=SubCategory.query.order_by(SubCategory.subctg_desc).all()

        if subctg:
            return ReturnSubCategory(subctg)
        else:
            return {"Error":"Not found"}, 404

@data_ns.route('/mapas/subcategorias/<int:id>')
class SubCategoryResource(Resource):
    def get(self, id):
        
        subctg=SubCategory.query.get_or_404(id)

        if subctg:
            return ReturnSubCategory(subctg)
        else:
            return {"Error":"Not found"}, 404
            
@data_ns.route('/mapas/references/<string:id>')
class ReferencesResource(Resource):
    def get(self, id):
        ref = Referency.query.filter_by(ref_id=id).first()

        if ref:
            return ReturnReferency(ref)
        else:
            return {"Error":"No data found"}, 404


@data_ns.route('/members')
class MemberResource(Resource):
    def get(self):
        member=Member.query.order_by(Member.id).all()

        if member:
            return ReturnMember(member)
        else:
            return {"Error":"No data found"}, 404


@data_ns.route('/members/<int:id>')
class MemberResource(Resource):
    def get(self, id):
        member=Member.query.get_or_404(id)

        if member:
            return ReturnMember(member)
        else:
            return {"Error":"Not found"}, 404


@data_ns.route('/teams')
class TeamResource(Resource):
    def get(self):
        team=Team.query.order_by(Team.id).all()

        if team:
            return ReturnTeam(team)
        else:
            return {"Error":"Not found"}, 404


@data_ns.route('/teams/<int:id>')
class TeamResource(Resource):
    def get(self, id):
        team=Team.query.get_or_404(id)

        if team:
            return ReturnTeam(team)
        else:
            return {"Error":"Not found"}, 404