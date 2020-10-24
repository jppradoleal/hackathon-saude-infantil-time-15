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
  endereco_un_basica_frequentada: String,
  num_prontuario: String,
  num_declaracao_nascido_vivo: String,
  num_registro_civil_nascimento: String,
  num_cartao_sus: String,

  data_de_nascimento: Date,
}, {
  timestamps: true
});

module.exports = mongoose.model('Child', childSchema);