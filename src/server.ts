import express from "express";

import "./database";
import { routes } from "./routes";

const app = express();
/**
 *  metodos em um CRUD
 *
 * GET = Busca
 * POST = Criacao
 * PUT = Altera
 * DELETE = Deletar
 * PATCH = Alterar uma informacao especifica
 */
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("Server running on port 3333"));
