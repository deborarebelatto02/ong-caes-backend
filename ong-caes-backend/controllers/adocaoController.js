const Adocao = require('../models/Adocao');
const Adotante = require('../models/Adotante');

exports.createAdocao = async (req, res) => {
  const { nome, telefone, endereco, caoId, data } = req.body;

  const adotante = await Adotante.create({ nome, telefone, endereco });

  const adocao = await Adocao.create({
    data,
    caoId,
    adotanteId: adotante.id
  });

  res.json(adocao);
};
