const Contato = require('../models/contatoModel')


exports.index = async (req, res) => {
  const contatos = await Contato.BuscaContatos()
  res.render('index',{contatos});

};

