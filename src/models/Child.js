const mongoose = require('mongoose');

const childSchema = new mongoose.Schema({
  nome: {
    type: String, 
    required: true
  },
  parente: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  municipio: {
    type: String,
    required: true
  },
  sexo: {
    type: String,
    enum: ['M', 'F'],
    required: true
  },
  frutas: String,
  industrializados: String,
  refeicoes_na_mesa: String,
  doces: String,

  numeroDeclaracao: String,

  nascimento: Date,
}, {
  timestamps: true
});

module.exports = mongoose.model('Child', childSchema);