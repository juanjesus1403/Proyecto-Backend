"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verReservas = exports.crearReserva = void 0;

var _relaciones = require("../config/relaciones");

const crearReserva = async (req, res) => {
  try {
    const {
      reservaCodigo
    } = req.body;
    const reservaUnica = await _relaciones.reserva.findOne({
      where: {
        reservaCodigo
      }
    });

    if (reservaUnica) {
      return res.status(400).json({
        success: false,
        content: null,
        message: "La reserva ya ha sido creada"
      });
    }

    const nuevaReserva = await Reserva.create(req.body);
    res.status(201).json({
      success: true,
      content: nuevaReserva,
      message: "Reserva creada exitosamente"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      content: error,
      message: "Error al crear la categoria"
    });
  }
};

exports.crearReserva = crearReserva;

const verReservas = async (req, res) => {
  try {
    const reservas = await Reserva.findAll();
    return res.json({
      success: true,
      content: reservas,
      message: null
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      content: error,
      message: "Error al ver las reservas"
    });
  }
};

exports.verReservas = verReservas;