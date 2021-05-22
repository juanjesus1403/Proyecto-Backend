"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.conexion = void 0;

var _sequelize = require("sequelize");

const conexion = process.env.JAWSDB_URL ? new _sequelize.Sequelize(process.env.JAWSDB_URL, {
  dialect: "mysql",
  timezone: "-05:00",
  logging: false,
  dialectOptions: {
    dateStrings: true
  }
}) : new _sequelize.Sequelize("proyectobackend", "root", //username
"root", //password
{
  dialect: "mysql",
  host: "127.0.0.1",
  port: 3306,
  timezone: "-05:00",
  //no funciona en SQLITE
  dialectOptions: {
    //sirve para que al momento de mostrar las fechas, automaticamente las convierta en string y no tener que hacer una conversacion manual
    dateStrings: true
  },
  logging: false
});
exports.conexion = conexion;