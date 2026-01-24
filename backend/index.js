import express from "express";
const app = express();
const port = 3000;
import cors from "cors";
import {
  sequelize,
  Familia,
  Especificidade,
  Pessoa,
  Evento,
  tipoEvento,
  Participacao,
} from "./database.js";

app.use(cors());
app.use(express.json());

await sequelize.sync();

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

app.post("/pessoa", async (req, res) => {
  if (!req.body.nome || !req.body.familiumId) {
    res.status(400).json({ message: "Request inválido" });
    return;
  }
  try {
    const novaPessoa = await Pessoa.create(req.body);
    res.status(201).json({
      message: "Pessoa criada com sucesso",
      data: novaPessoa,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro no cadastro de pessoa",
      error: error.message,
    });
  }
});

app.get("/pessoas", async (req, res) => {
  const pessoas = await Pessoa.findAll();
  res.status(200).json(pessoas);
});

app.get("/eventos", async (req, res) => {
  const eventos = await Evento.findAll();
  res.status(200).json(eventos);
});

app.post("/evento", async (req, res) => {
  if (!req.body.nome || !req.body.data) {
    res.status(400).json({ message: "Request inválido" });
    return;
  }
  try {
    const novoEvento = await Evento.create(req.body);
    res.status(201).json({
      message: "Evento criada com sucesso",
      data: novoEvento,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro no cadastro de Evento",
      error: error.message,
    });
  }
});

app.get("/tipoeventos", async (req, res) => {
  const tipoEventos = await tipoEvento.findAll();
  res.status(200).json(tipoEventos);
});

app.post("/tipoevento", async (req, res) => {
  if (!req.body.tipo) {
    res.status(400).json({ message: "Request inválido" });
    return;
  }
  try {
    const novoTipoEvento = await tipoEvento.create(req.body);
    res.status(201).json({
      message: "tipoEvento criado com sucesso",
      data: novoTipoEvento,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro no cadastro de tipoEvento",
      error: error.message,
    });
  }
});

app.post("/participacao", async (req, res) => {
  if (!req.body.eventoId || !req.body.pessoaId) {
    res.status(400).json({ message: "Request inválido" });
    return;
  }
  try {
    const novaParticipacao = await Participacao.create(req.body);
    res.status(201).json({
      message: "Participacao registrada com sucesso",
      data: novaParticipacao,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro no cadastro de Participacao",
      error: error.message,
    });
  }
});

app.get("/eventos/:id/participantes", async (req, res) => {
  try {
    const participantes = await Participacao.findAll({
      where: { eventoId: req.params.id },
    });
    res.status(200).json(participantes);
  } catch (error) {
    res.status(500).json({
      message: "Erro na busca",
      error: error.message,
    });
  }
});

app.delete("/participacao/:id", async (req, res) => {
  try {
    await Participacao.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({
      message: "Erro ao deletar",
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Domus listening on port ${port}`);
});
