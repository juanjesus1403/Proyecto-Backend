import {Router} from "express";
import * as locales_controller from "../controllers/locales";

export const locales_router = Router()
locales_router
    .route("/locales")
    .post(locales_controller.crearLocales)
    .get(locales_controller.listarLocales);