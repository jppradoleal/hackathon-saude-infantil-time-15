const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    maxlength: 150,
  },
  link: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
    maxlength: 255
  },
  tag: { 
    type: String, 
    maxlength: 15, 
    required: true 
  },
  caminho_da_imagem: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Post', postSchema);