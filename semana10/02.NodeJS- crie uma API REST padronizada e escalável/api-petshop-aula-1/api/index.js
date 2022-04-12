const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const roteador = require("./rotas/fornecedores");
const config = require("config");
// const tabela = require("./banco-de-dados/criarTabelas")

app.use(bodyParser.json());

app.use("/api/fornecedores", roteador);
// app.use("/api/banco-de-dados/criarTabelas", tabela);

app.listen(config.get("api.porta"), () =>
  console.log("A API está funcionando!")
);
