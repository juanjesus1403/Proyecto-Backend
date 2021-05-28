import {Router} from "express";
import * as categoria_controller from "../controllers/categoria";

export const categoria_router = Router()
categoria_router.route("/categoria").post(categoria_controller.crearCategoria);
categoria_router.route("/categoria").get(categoria_controller.listarCategoria);