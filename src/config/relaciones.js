
import categoria_model from "../models/categorias";
import locales_model from "../models/locales";
import persona_model from "../models/persona";
import reserva_model from "../models/reserva";
import roles_model from "../models/roles";

export const Categoria = categoria_model();
export const Locales = locales_model();
export const Persona = persona_model();
export const Reserva = reserva_model();
export const Roles = roles_model();



Categoria.hasMany(Locales,{
  foreignKey:{
    name: "categorias_id",
    allowNull: false,
  },
});

Locales.belongsTo(Categoria,{
  foreignKey: "categorias_id",
});

Roles.hasMany(Persona,{
  foreignKey:{
    name: "roles_id",
    allowNull:false,
  },
});

Persona.belongsTo(Roles,{
  foreignKey: "roles_id",
});

Locales.hasMany(Reserva,{
  foreignKey: {
    name: "locales_id",
    allowNull: false, 
  },
});

Reserva.belongsTo(Locales,{
  foreignKey: "locales_id",
});

Persona.hasMany(Reserva,{
  foreignKey: {
    name: "persona_id",
    allowNull:false,
  }
})

Reserva.belongsTo(Persona,{
  foreignKey: "persona_id"
})

// Categoria.sync({force:true})


