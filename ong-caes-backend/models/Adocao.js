const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Cao = require('./Cao');
const Adotante = require('./Adotante');

const Adocao = sequelize.define('Adocao', {
  data: DataTypes.DATE
});

Adocao.belongsTo(Cao, { foreignKey: 'caoId' });
Adocao.belongsTo(Adotante, { foreignKey: 'adotanteId' });

module.exports = Adocao;
