import { DataTypes } from "sequelize";
import { conexion } from "../config/sequelize";
import {compareSync, hashSync} from "bcrypt";
import {sign} from "jsonwebtoken"

export default () =>{ let persona = conexion.define("persona",{
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
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    personaPassword:{
      type: DataTypes.TEXT,
      field: "password",      
    },
  },
  {
    tableName:"persona",
    timestamps: false,
  }
);

  persona.prototype.setearPassword = function (password) {
    const hash = hashSync(password, 10);
    this.personaPassword = hash;
  };
  
  persona.prototype.validarPassword = function(password){
    return compareSync(password, this.personaPassword)
  }

  persona.prototype.generarJWT = function(){
    const payload = {
      personaId: this.personaId,
      personaCorreo: this.personaCorreo,
    }
    const password = "password"
    return sign(payload, password, {expiresIn: "1h"});
  }
  return persona;
};

