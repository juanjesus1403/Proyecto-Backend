import {Router} from "express";
import * as locales_controller from "../controllers/locales";
import locales from "../models/locales";

export const locales_router = Router()
locales_router.route("/locales").post(locales_controller.crearLocales);
locales_router.route("/localesobtener").get(locales_controller.listarLocales);

locales_router.route("/localesagregar/:id").put(locales_controller.actualizarLocales);

locales_router.route("/localeseliminar/:id").delete(locales_controller.eliminarLocales);