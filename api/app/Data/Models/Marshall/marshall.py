from flask_restx import fields
from app import data_ns


legend_model=data_ns.model(
    "Legend", 
    {
        "atr": fields.String(required=False, description='Attribute'),
        "color": fields.String(required=False, description='Color'),
    }
)


referency_model=data_ns.model(
    "Referency",
    {
        "ref_id":fields.String(),
        "src":fields.String(),
        "fontes":fields.String(),
        "elaboracao":fields.String()
    }
)


map_model=data_ns.model(
    "Map",
    {
        "map_id":fields.String(),
        "map_desc":fields.String(),
        "map_atr": fields.String(),
        "map_ctg": fields.String(),
        "choropleth": fields.Integer(),
        "map_subctg_id": fields.Integer(),
        "map_refs": fields.Nested(referency_model),
        "map_legs": fields.Nested(legend_model),
    }
)


subcategory_model = data_ns.model(
    "SubCategory", 
    {
        "subctg_id": fields.Integer(required=True),
        "subctg_desc": fields.String(required=True),
        "sub_ctg_id": fields.Integer(required=True),
        "subctg_maps": fields.Nested(map_model, many=True),
    }
)


category_model=data_ns.model(
    "Category",
    {
        "ctg_id":fields.Integer(),
        "ctg_desc":fields.String(255),
        "ctg_subs":fields.Nested(subcategory_model, many=True)
    }
)

member_model=data_ns.model(
    "Member",
    {
        "id":fields.Integer(),
        "name":fields.String(255),
        "lattes":fields.String(255),
        "git":fields.String(30),
        "member_team_id":fields.Integer()
    }
)

team_model=data_ns.model(
    "Team",
    {
        "id":fields.Integer(),
        "description":fields.String(255),
        "members":fields.Nested(member_model, many=True)
    }
)