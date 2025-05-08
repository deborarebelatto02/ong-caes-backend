const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Cao = sequelize.define('Cao', {
  nome: DataTypes.STRING,
  idade: DataTypes.INTEGER,
  imagem: DataTypes.STRING
});

module.exports = Cao;
