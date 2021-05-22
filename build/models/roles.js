"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _sequelize2 = require("../config/sequelize");

var _default = () => _sequelize2.conexion.define("roles", {
  rolesId: {
    primaryKey: true,
    type: _sequelize.DataTypes.INTEGER,
    field: "id",
    unique: true,
    allowNull: false,
    autoIncrement: true
  },
  tipoRol: {
    type: _sequelize.DataTypes.STRING(45),
    field: "tipo_rol"
  }
}, {
  tableName: "roles",
  timestamps: false
});

exports.default = _default;