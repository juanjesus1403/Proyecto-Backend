
import categorias_model from "../models/categorias";
import locales_model from "../models/locales";
import persona_model from "../models/persona";
import reserva_model from "../models/reserva";
import roles_model from "../models/roles";

export const Categorias = categorias_model();
export const Locales = locales_model();
export const Persona = persona_model();
export const Reserva = reserva_model();
export const Roles = roles_model();

Categorias.hasMany(Locales,{
  foreignKey:{
    name: "categorias_id",
    allowNull: false,
  }
});

Locales.belongsTo(Categorias,{
  foreignKey: "categorias_id",
});

