import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

import "./database";
import { routes } from "./routes";

const app = express();

const http = createServer(app); // aqui e criado o protocolo HTTP
const io = new Server(http); // aqui e criado o protocolo de web socket

io.on("connection", (socket: Socket) => {
  console.log("Se conectou", socket.id);
});

app.use(express.json());
app.use(routes);

http.listen(3333, () => console.log("Server running on port 3333"));

/**
 *  metodos em um CRUD
 *
 * GET = Busca
 * POST = Criacao
 * PUT = Altera
 * DELETE = Deletar
 * PATCH = Alterar uma informacao especifica
 */
