import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

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
