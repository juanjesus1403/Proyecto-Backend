import {DataTypes} from "sequelize";
import {conexion} from "../config/sequelize";

export default () => conexion.define("locales",
{
    localId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      field: "id",
    },
    localNombre:{
      type: DataTypes.STRING(40),
      field: "nombre",
    },
    localDescripcion:{
      type: DataTypes.STRING(120),
      field: "descripcion",
    },
    localDistrito:{
      type: DataTypes.STRING(50),
      field: "distrito",
    },
    localLatitud: {
      type:DataTypes.FLOAT,
      field: "latitud",
    },
    localLongitud:{
      type:DataTypes.FLOAT,
      field: "longitud",
    },
  },
  {
    tableName: "locales",
    timestamps:true,
    createdAt: "fecha_creacion",
    updatedAt: "ultima_modificacion",
  }
);9