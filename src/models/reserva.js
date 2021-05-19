import { DataTypes } from "sequelize";
import { conexion } from "../config/sequelize";

export default () => conexion.define("reserva",{
  reservaId:{
    primaryKey: true,
    unique: true,
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
  },
  reservaCodigo:{
    type:DataTypes.INTEGER,
    field: "codigo",
  },
  reservaFecha:{
    type:DataTypes.STRING(30),
    field: "fecha",
  },
},
{
  tableName: "reserva",
  timestamps: false,
});