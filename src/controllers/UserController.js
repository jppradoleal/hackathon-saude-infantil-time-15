const User = require('../models/User');
const bcrypt = require('bcrypt');
const yup = require('yup');

module.exports = {
  async show(req, res) {
    const { id } = req.params;

    const user = await User.findById(id);

    return res.json({ message: 'Found user.', user });
  },
  
  async create(req, res) {
    let {
      nome,
      email,
      senha
    } = req.body;

    const userExists = await User.findOne({email});

    if(userExists) {
      return res.status(400).json({error: 'Email already signed up'});
    }

    const schema = yup.object().shape({
      nome: yup.string().required(),
      email: yup.string().email().required(),
      senha: yup.string().required(),
    });

    await schema.validate({ nome, email, senha });

    senha = await bcrypt.hash(senha, Number(process.env.ROUNDS_BCRYPT));

    await User.create({nome, email, senha});

    return res.status(202).json({ message: "User account created" });
  },

  async delete(req, res) {
    const { id } = req.params;

    await User.findByIdAndDelete(id);

    return res.json({ message: "User account deleted" });
  },
}