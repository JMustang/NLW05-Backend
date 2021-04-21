import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();
/**
 * Tipos de parametros paraRoutes params => Parametro de rotas
 * http://localhost:3000/settings/1
 *
 * query params => filtros e buscas
 * http://localhost:3000/settings/1/?search=alguma&coisa
 *
 * Body params => {
 *
 * }
 */
const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);

export { routes };
