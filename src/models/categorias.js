import {DataTypes} from "sequelize";
import {conexion} from "../config/sequelize";

export default () => conexion.define("categorias",{
  categoriaId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
    field: "id",
  },
  categoriaRestaurante:{
    type: DataTypes.STRING(45),
    field:"restaurantes",
  },
  categoriaEstacionamiento:{
    type: DataTypes.STRING(45),
    field: "estacionamientos",
  },
},
{
  tableName:"categorias",
  timestamps: true,
}
);