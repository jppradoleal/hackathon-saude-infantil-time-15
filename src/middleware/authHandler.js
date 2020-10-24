const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = {
  async authenticate(req, res, next) {
    try { 
      const token = req.headers["authorization"].split(' ')[1]; // Bearer {token} 

      const decoded = await jwt.verify(token, process.env.SECRET);
      
      req.user = {};

      req.user["email"] = decoded.email;
      req.user["id"] = decoded.id;
      
      next();
    } catch (err) {
      console.log(err);
      return res.status(401).json({message: 'Not authorized'});
    }
  },
  async login(req, res) {
    const { cpf, senha } = req.body;

    const user = await User.findOne({cpf});

    if(user) {
      await bcrypt.compare(senha, user.senha);
      const token = await jwt.sign({ cpf, id: user.id }, process.env.SECRET);
      return res.json({ message: 'User authenticated', token});
    }

    return res.status(400).json({ message: 'User not found!' });
  }
}