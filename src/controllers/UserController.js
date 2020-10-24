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
      senha,
      data_de_nascimento,
      estado,
      municipio,
      endereco,
      telefone,
      cpf
    } = req.body;

    const data = {
      nome,
      email,
      senha,
      data_de_nascimento,
      estado,
      municipio,
      endereco,
      telefone,
      cpf
    }

    const userExists = await User.findOne({email});

    if(userExists) {
      return res.status(400).json({error: 'Email already signed up'});
    }

    const schema = yup.object().shape({
      nome: yup.string().required(),
      email: yup.string().email().required(),
      senha: yup.string().required(),
      data_de_nascimento: yup.date().required(),
      estado: yup.string().required(),
      municipio: yup.string().required(),
      endereco: yup.string().required(),
      telefone: yup.string().required().max(12),
      cpf: yup.string().required().length(11)
    });

    await schema.validate(data, { abortEarly: false });

    senha = await bcrypt.hash(senha, Number(process.env.ROUNDS_BCRYPT));

    await User.create(data);

    return res.status(201).json({ message: "User account created" });
  },

  async delete(req, res) {
    const { id } = req.params;

    await User.findByIdAndDelete(id);

    return res.json({ message: "User account deleted" });
  },
}