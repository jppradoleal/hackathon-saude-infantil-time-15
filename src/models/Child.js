const mongoose = require('mongoose');

const childSchema = new mongoose.Schema({
  nome_da_crianca: {
    type: String, 
    required: true
  },
  parente: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  municipio_nascimento: {
    type: String,
    required: true
  },
  endereco: {
    type: String,
    required: true
  },
  ponto_referencia: {
    type: String
  },
  telefone: String,
  bairro: String,
  cep: String,
  cidade: String,
  uf: {
    type: String,
    maxlength: 2,
  },
  sexo_biologico: {
    type: String,
    enum: ['M', 'F'],
    required: true
  },
  raca: {
    type: String,
    enum: [
      'BRANCA',
      'PRETA',
      'PARDA',
      'AMARELA',
      'INDÍGENA'
    ],
    required: true
  },

  atividades_fisicas: Boolean,
  comida_industrializada: Boolean,
  frequenta_medico: Boolean,

  endereco_un_basica_frequentada: String,
  num_cartao_sus: String,
  rg: String,

  data_de_nascimento: Date,
}, {
  timestamps: true
});

module.exports = mongoose.model('Child', childSchema);