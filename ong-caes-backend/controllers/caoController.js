const Cao = require('../models/Cao');

exports.createCao = async (req, res) => {
  const { nome, idade, raca } = req.body;
  const imagem = req.file.path;
  const cao = await Cao.create({ nome, idade, raca, imagem });
  res.json(cao);
};

exports.getCaes = async (req, res) => {
  const caes = await Cao.findAll();
  res.json(caes);
};

exports.updateCao = async (req, res) => {
  const { id } = req.params;
  const { nome, idade, raca } = req.body;
  await Cao.update({ nome, idade, raca }, { where: { id } });
  res.json({ message: 'Atualizado' });
};

exports.deleteCao = async (req, res) => {
  const { id } = req.params;
  await Cao.destroy({ where: { id } });
  res.json({ message: 'Deletado' });
};
