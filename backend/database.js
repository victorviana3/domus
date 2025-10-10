import sqlite3 from "sqlite3";
const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./domus.db",
});

const Familia = Database.define("familia", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  pessoa_referencia: {
    id:
  },
});
