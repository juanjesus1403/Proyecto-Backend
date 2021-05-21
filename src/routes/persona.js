import { Router } from "express";
import * as persona_controller from "../controllers/persona"


export const persona_router = Router();

persona_router.post("/registro", persona_controller.registro);
persona_router.post("/login", persona_controller.login);