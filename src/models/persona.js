import { DataTypes } from "sequelize";
import { conexion } from "../config/sequelize";

export default () => conexion.define("persona",{
  personaId:{
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: "id",
    unique: true,
    allowNull: false,
    autoIncrement: true,
  },
  personaNombre:{
    type:DataTypes.STRING(45),
    field: "nombre",
  },
  personaApellido:{
    type:DataTypes.STRING(45),
    field:"apellido",
  },
  personaCorreo:{
    type: DataTypes.STRING(45),
    field: "correo",
  },
  personaPassword:{
    type: DataTypes.STRING(12),
    field: "password",
  },
},
{
  tableName:"persona",
  timestamps: false,
}
)