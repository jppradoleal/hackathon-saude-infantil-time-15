const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    enum: ['PARENT', 'ADMIN', 'NURSE'],
    default: 'PARENT'
  }
})

module.exports = mongoose.model('User', userSchema);