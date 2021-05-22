"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _sequelize2 = require("../config/sequelize");

var _default = () => _sequelize2.conexion.define("reserva", {
  reservaId: {
    primaryKey: true,
    unique: true,
    field: "id",
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true
  },
  reservaCodigo: {
    type: _sequelize.DataTypes.INTEGER,
    field: "codigo"
  },
  reservaFecha: {
    type: _sequelize.DataTypes.STRING(30),
    field: "fecha"
  }
}, {
  tableName: "reserva",
  timestamps: false
});

exports.default = _default;