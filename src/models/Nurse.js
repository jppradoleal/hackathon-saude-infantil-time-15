const mongoose = require('mongoose');

const nurseSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
    cod_unidade: {
      type: Number,
      required: true
    },
    numero_sus: {
      type: Number,
      required: true
    }
  }
})

module.exports = mongoose.model('Nurse', nurseSchema);