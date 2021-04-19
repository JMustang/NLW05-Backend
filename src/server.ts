import express from "express";

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

app.get("/", (req, res) => {
  return res.json({
    message: "Hola",
  });
});

app.post("/users", (req, res) => {
  return res.json({ message: "Usuario salvo com sucesso!" });
});

app.listen(3333, () => console.log("Server running on port 3333"));
