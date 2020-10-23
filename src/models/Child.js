const mongoose = require('mongoose');

const childSchema = new mongoose.Schema({
  nome_da_crianca: {
    type: String, 
    required: true
  },
  nome_da_mae: {
    type: String, 
    required: true
  },
  peso: {
    type: Number,
  },
  peso_ao_nascer: Number,
  altura: Number,
  sexo_biologico: {
    type: String,
    enum: ['M', 'F'],
    req
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
  uf: {
    type: String,
    maxlength: 2,
    required: true
  },
  municipio: String,
  local_de_atendimento: {
    type: String,
    enum: [
      'UBS',
      'Unidade Movel',
      'Rua',
      'Domicilio',
      'Escola/Creche',
      'Posto',
      'Instituição',
      'Unidade Socioeducativa',
      'Outros'
    ],
    required: true,
    default: 'Outros'
  },
  frequenta_curso: Boolean,
  doencas: {
    type: [String],
    enum: [
      'Anemia falciforme',
      'Diabetes melitus',
      'Doencas cardiovasculares',
      'Hipertensão Arterial Sistêmica',
      'Osteoporose',
      'Outras',
      'Nenhuma'
    ],
    required: true,
    default: 'Nenhuma'
  },
  deficiencias: {
    type: [String],
    enum: [
      'Anemia ferropriva',
      'Distúrbio por Deficiência de Iodo',
      'Diarréia',
      'Infecções intestinais virais',
      'Infecção Respiratória Aguda',
      'Hipovitaminose A',
      'Outras',
      'Nenhuma' 
    ],
    required: true,
    default: 'Nenhuma'
  },
  hipertenso: {
    type: Boolean,
    required: true,
    default: false
  },
  diabetico: {
    type: Boolean,
    required: true,
    default: false
  },
  tipo_acompanhamento: {
    type: String,
    enum: [
      'Atenção Básica',
      'Chamada Nutricional',
      'Saúde na Escola'
    ]
  },

  id_funcionario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Nurse',
    required: true
  },

  data_de_nascimento: Date,
});

module.exports = mongoose.model('Child', childSchema);