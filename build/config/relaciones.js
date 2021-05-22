"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Roles = exports.Reserva = exports.Persona = exports.Locales = exports.Categoria = void 0;

var _categorias = _interopRequireDefault(require("../models/categorias"));

var _locales = _interopRequireDefault(require("../models/locales"));

var _persona = _interopRequireDefault(require("../models/persona"));

var _reserva = _interopRequireDefault(require("../models/reserva"));

var _roles = _interopRequireDefault(require("../models/roles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Categoria = (0, _categorias.default)();
exports.Categoria = Categoria;
const Locales = (0, _locales.default)();
exports.Locales = Locales;
const Persona = (0, _persona.default)();
exports.Persona = Persona;
const Reserva = (0, _reserva.default)();
exports.Reserva = Reserva;
const Roles = (0, _roles.default)();
exports.Roles = Roles;
Categoria.hasMany(Locales, {
  foreignKey: {
    name: "categorias_id",
    allowNull: false
  }
});
Locales.belongsTo(Categoria, {
  foreignKey: "categorias_id"
});
Roles.hasMany(Persona, {
  foreignKey: {
    name: "roles_id",
    allowNull: false
  }
});
Persona.belongsTo(Roles, {
  foreignKey: "roles_id"
});
Locales.hasMany(Reserva, {
  foreignKey: {
    name: "locales_id",
    allowNull: false
  }
});
Reserva.belongsTo(Locales, {
  foreignKey: "locales_id"
});
Persona.hasMany(Reserva, {
  foreignKey: {
    name: "persona_id",
    allowNull: false
  }
});
Reserva.belongsTo(Persona, {
  foreignKey: "persona_id"
});
Reserva.sync({
  force: true
});