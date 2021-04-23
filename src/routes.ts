import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();
const settingsController = new SettingsController();
const usersController = new UsersController();

routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create);

export { routes };

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
