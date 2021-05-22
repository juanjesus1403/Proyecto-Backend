"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listarCategoria = exports.crearCategoria = void 0;

var _relaciones = require("../config/relaciones");

//CRUD
const crearCategoria = async (req, res) => {
  try {
    const validacion = new RegExp(/^[a-zA-Z ]+$/);

    if (validacion.test(req.body.categoriaNombre)) {
      const nuevaCategoria = await _relaciones.Categoria.create(req.body);
      return res.status(201).json({
        success: true,
        content: nuevaCategoria,
        message: "Categoria creada correctamente"
      });
    } else {
      return res.status(400).json({
        success: false,
        content: null,
        message: "Nombre de Categoria incorrecto"
      });
    }
  } catch (error) {
    return res.status(501).json({
      success: false,
      content: error,
      message: "Error al crear una nueva categoria"
    });
  }
};

exports.crearCategoria = crearCategoria;

const listarCategoria = async (req, res) => {
  try {
    const categoria = await _relaciones.Categoria.findAll();
    return res.json({
      success: true,
      content: categoria,
      message: null
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      content: error,
      message: "Error al devolver Categoria"
    });
  }
};

exports.listarCategoria = listarCategoria;