import {DataTypes} from "sequelize";
import {conexion} from "../config/sequelize";

export default () => conexion.define("roles",{
  rolesId: {
    primaryKey:true,
    type:DataTypes.INTEGER,
    field:"id",
    unique: true,
    allowNull: false,
    autoIncrement: true,
  },
  tipoRol:{
    type:DataTypes.STRING(45),
    field: "tipo_rol",
  },
},
{
  tableName: "roles",
  timestamps: false,
});