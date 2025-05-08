const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Adotante = sequelize.define('Adotante', {
  nome: DataTypes.STRING,
  telefone: DataTypes.STRING,
  endereco: DataTypes.STRING
});

module.exports = Adotante;
