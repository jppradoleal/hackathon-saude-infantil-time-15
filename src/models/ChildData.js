const mongoose = require('mongoose');

const childSchema = new mongoose.Schema({
  id_crianca: {
    type: mongoose.Types.ObjectId,
    ref: 'Child'
  },
  peso: Number,
  altura: Number,
}, {
  timestamps: true
});

module.exports = mongoose.model('ChildData', childSchema);