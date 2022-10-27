const mongoose = require('mongoose');

const ContatoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: String
});

const contatoModel = mongoose.model('Contato', ContatoSchema);

function Contato (body){
  this.body = body;
  this.errors = [];
  this.contato = null;
}

Contato.prototype.register = function(){
  this.valida()
}

module.exports = Contato;
