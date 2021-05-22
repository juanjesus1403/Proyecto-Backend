"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actualizarLocales = actualizarLocales;
exports.eliminarLocales = eliminarLocales;
exports.listarLocales = exports.crearLocales = void 0;

var _relaciones = require("../config/relaciones");

var _locales = _interopRequireDefault(require("../models/locales"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//CRUD
const crearLocales = async (req, res) => {
  try {
    const validacion = new RegExp(/^[a-zA-Z ]+$/);

    if (validacion.test(req.body.localesNombre)) {
      const nuevoLocal = await _relaciones.Locales.create(req.body);
      return res.status(201).json({
        success: true,
        content: nuevoLocal,
        message: "Local creado correctamente"
      });
    } else {
      return res.status(400).json({
        success: false,
        content: null,
        message: "Nombre de local incorrecto"
      });
    }
  } catch (error) {
    return res.status(501).json({
      success: false,
      content: error,
      message: "Error al crear un local nuevo"
    });
  }
};

exports.crearLocales = crearLocales;

const listarLocales = async (req, res) => {
  try {
    const locales = await _relaciones.Locales.findAll();
    return res.json({
      success: true,
      content: locales,
      message: null
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      content: error,
      message: "Error al devolver los locales"
    });
  }
};

exports.listarLocales = listarLocales;

async function actualizarLocales(req, res) {
  const {
    id
  } = req.params;
  const {
    nombre,
    descripcion,
    distrito,
    latitud,
    longitud
  } = req.body;
  const Local = await _locales.default.findAll({
    attributes: ['nombre', 'descripcion', 'distrito', 'latitud', 'longitud'],
    where: {
      id
    }
  });
  Local.forEach(async () => {
    await _locales.default.update({
      nombre,
      descripcion,
      distrito,
      latitud,
      longitud
    });
  });
  return res.json({
    mesaage: 'Local actualizado',
    data: Local
  });
}

;

async function eliminarLocales(req, res) {
  const {
    id
  } = req.params;
  const locales = await _relaciones.Locales.destroy({
    where: {
      id
    }
  });
  res.json({
    message: 'Local eliminado'
  });
}

;