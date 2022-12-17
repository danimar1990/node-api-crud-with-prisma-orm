const controlador = require("./controllers/UsuarioController");
const roteador = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { Usuario } = new PrismaClient();

roteador.get("/", controlador.listarUsuarios);
roteador.post("/", controlador.criarUsuario);
roteador.get("/:id", controlador.buscarUsuarioPorID);
roteador.put("/:id", controlador.alterarUsuario);
roteador.delete("/:id", controlador.excluirUsuario);

module.exports = roteador;
