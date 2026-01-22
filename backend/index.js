import express from "express";
const app = express();
const port = 3000;
import cors from "cors";
import { sequelize, Familia, Especificidade } from "./database.js";

app.use(cors());
app.use(express.json());

await sequelize.sync();

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/familias", async (req, res) => {
  const familias = await Familia.findAll();
  res.status(200).json(familias);
});

app.post("/familia", async (req, res) => {
  console.log(req.body);
  try {
    const novaFamilia = await Familia.create(req.body);
    res
      .status(201)
      .json({ message: "Familia cadastrada com sucesso", data: novaFamilia });
  } catch (error) {
    console.error("Erro ao cadastrar a familia", error);
    res
      .status(500)
      .json({ message: "Erro ao cadastrar a familia", error: error.message });
  }
});

app.get("/especificidades", async (req, res) => {
  const especificidades = await Especificidade.findAll();
  res.status(200).json(especificidades);
});

app.post("/especificidade", async (req, res) => {
  if (!req.body.tipo) {
    res.status(400).json({ message: "Campo tipo inválido" });
    return;
  }
  try {
    const novaEspecificidade = await Especificidade.create(req.body);
    res.status(201).json({
      message: "Especificidade criada com sucesso",
      data: novaEspecificidade,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro no cadastro de especificidade",
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Domus listening on port ${port}`);
});
