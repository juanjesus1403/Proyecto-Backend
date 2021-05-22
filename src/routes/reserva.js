import {Router} from "express";
import * as reserva_controller from "../controllers/reserva";

export const reserva_router = Router();
reserva_router.route("/reserva").post(reserva_controller.crearReserva);
reserva_router.route("/verreserva").get(reserva_controller.verReservas);