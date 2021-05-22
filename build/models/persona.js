"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _sequelize2 = require("../config/sequelize");

var _bcrypt = require("bcrypt");

var _jsonwebtoken = require("jsonwebtoken");

var _default = () => {
  let persona = _sequelize2.conexion.define("persona", {
    personaId: {
      primaryKey: true,
      type: _sequelize.DataTypes.INTEGER,
      field: "id",
      unique: true,
      allowNull: false,
      autoIncrement: true
    },
    personaNombre: {
      type: _sequelize.DataTypes.STRING(45),
      field: "nombre"
    },
    personaApellido: {
      type: _sequelize.DataTypes.STRING(45),
      field: "apellido"
    },
    personaCorreo: {
      type: _sequelize.DataTypes.STRING(45),
      field: "correo",
      unique: true,
      validate: {
        isEmail: true
      }
    },
    personaPassword: {
      type: _sequelize.DataTypes.TEXT,
      field: "password"
    }
  }, {
    tableName: "persona",
    timestamps: false
  });

  persona.prototype.setearPassword = function (password) {
    const hash = (0, _bcrypt.hashSync)(password, 10);
    this.personaPassword = hash;
  };

  persona.prototype.validarPassword = function (password) {
    return (0, _bcrypt.compareSync)(password, this.personaPassword);
  };

  persona.prototype.generarJWT = function () {
    const payload = {
      personaId: this.personaId,
      personaCorreo: this.personaCorreo
    };
    const password = "password";
    return (0, _jsonwebtoken.sign)(payload, password, {
      expiresIn: "1h"
    });
  };

  return persona;
};

exports.default = _default;