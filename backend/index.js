const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/ping", (req, res) => {
  res.send("pong");
});

const familiasCadastradas = [];

app.get("/familias", (req, res) => {
  res.status(200).json(familiasCadastradas);
});

app.post("/familia", (req, res) => {
  console.log(req.body);
  const novaFamilia = req.body;
  familiasCadastradas.push(novaFamilia);
  res
    .status(201)
    .json({ message: "Familia cadastrada com sucesso", data: novaFamilia });
});

app.listen(port, () => {
  console.log(`Domus listening on port ${port}`);
});
