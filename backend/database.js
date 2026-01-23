import Sequelize from "sequelize";
export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./domus.db",
});

export const Familia = sequelize.define("familia", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
  },
  endereco: {
    type: Sequelize.STRING,
  },
});

export const Especificidade = sequelize.define(
  "especificidade",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    tipo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
);

Familia.belongsTo(Especificidade);

export const Evento = sequelize.define("evento", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  data: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  endereco: {
    type: Sequelize.STRING,
  },
});

export const tipoEvento = sequelize.define(
  "tipoEvento",
  {
    tipo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
);

Evento.belongsTo(tipoEvento, {
  foreignKey: {
    allowNull: false,
  },
});

export const Pessoa = sequelize.define("pessoa", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  data_nascimento: {
    type: Sequelize.DATEONLY,
  },
  contato: {
    type: Sequelize.STRING(11),
  },
  eh_responsavel: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

Pessoa.belongsTo(Familia, {
  foreignKey: {
    allowNull: false,
  },
});

export const Participacao = sequelize.define(
  "participacao",
  {},
  {
    timestamps: false,
  },
);

Participacao.belongsTo(Evento);
Participacao.belongsTo(Pessoa);
