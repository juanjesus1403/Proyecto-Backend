"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _sequelize2 = require("../config/sequelize");

var _default = () => _sequelize2.conexion.define("locales", {
  localId: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
    field: "id"
  },
  localNombre: {
    type: _sequelize.DataTypes.STRING(40),
    field: "nombre"
  },
  localDescripcion: {
    type: _sequelize.DataTypes.STRING(120),
    field: "descripcion"
  },
  localDistrito: {
    type: _sequelize.DataTypes.STRING(50),
    field: "distrito"
  },
  localLatitud: {
    type: _sequelize.DataTypes.FLOAT,
    field: "latitud"
  },
  localLongitud: {
    type: _sequelize.DataTypes.FLOAT,
    field: "longitud"
  }
}, {
  tableName: "locales",
  timestamps: true,
  createdAt: "fecha_creacion",
  updatedAt: "ultima_modificacion"
});

exports.default = _default;