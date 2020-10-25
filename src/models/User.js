const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true,
    unique: true
  },
  senha: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    enum: ['PARENT', 'ADMIN'],
    default: 'PARENT'
  },
  data_de_nascimento: Date,
  estado: String,
  municipio: String,
  endereco: String,
  telefone: String 
})

module.exports = mongoose.model('User', userSchema);