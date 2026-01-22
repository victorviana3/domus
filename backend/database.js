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
  especificidade: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
});

export const Especificidade = sequelize.define("especificidade", {
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
});
