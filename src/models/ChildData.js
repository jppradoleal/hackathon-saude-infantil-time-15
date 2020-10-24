const mongoose = require('mongoose');

const childSchema = new mongoose.Schema({
  id_crianca: {
    type: mongoose.Types.ObjectId,
    ref: 'Child'
  },
  peso: {
    type: Number,
    default: 0
  },
  altura: {
    type: Number,
    default: 0
  },
  imc: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('ChildData', childSchema);