import {DataTypes} from "sequelize";
import {conexion} from "../config/sequelize";

export default () => conexion.define("categoria",{
  categoriaId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
    field: "id",
  },
  categoriaNombre:{
    type: DataTypes.STRING(45),
    field:"nombre",
  },
  categoriaDescripcion:{
    type: DataTypes.STRING(45),
    field: "descripción",
  },
},
{
  tableName:"categorias",
  timestamps: true,
},
);
