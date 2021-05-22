"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _sequelize2 = require("../config/sequelize");

var _default = () => _sequelize2.conexion.define("categoria", {
  categoriaId: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
    field: "id"
  },
  categoriaNombre: {
    type: _sequelize.DataTypes.STRING(45),
    field: "nombre"
  },
  categoriaDescripcion: {
    type: _sequelize.DataTypes.STRING(45),
    field: "descripción"
  }
}, {
  tableName: "categorias",
  timestamps: true
});

exports.default = _default;