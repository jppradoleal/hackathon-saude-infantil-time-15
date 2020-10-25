const User = require('../models/User');
const Child = require('../models/Child');
const ChildData = require('../models/ChildData');
const yup = require('yup');
const childView = '../views/ChildView'; 

module.exports = {
  async show(req, res) {
    const { rg, csus } = req.query;

    let child;
    if(rg) {
      child = await Child.findOne({rg});
    } else if(csus) {
      child = await Child.findOne({num_cartao_sus: csus});
    }
    if(child) {
      return res.json({ message: 'Child registry found', child: childView(child) });
    }
    return res.json({ message: 'No child registry found' })
  },

  async index(req, res) {
    const {id: parent_id} = req.user; 
    const children = await Child.find();
    
    const data = children.filter(child => child.parente == parent_id);

    return res.json({ message: 
      data.length ? 
        'Multiple children registries found' : 
        'No children registries found', 
      children: childView.renderMany(data)});
  },

  async store(req, res) {
    const receivedData = req.body;

    const { _id } = await User.findById(req.user.id);

    const data = {
      ...receivedData,
      parente: _id
    }

    const schema = yup.object().shape({
      nome: yup.string().required(),
      municipio: yup.string().required(),
      sexo: yup.string().required(),
      numeroDeclaracao: yup.string().required(),
      nascimento: yup.date().required(),
      frutas: yup.string().required(),
      industrializados: yup.string().required(),
      doces: yup.string().required(),
      refeicoes_na_mesa: yup.string().required()
    });

    await schema.validate(data, { abortEarly: false });
  
    const child = await (await Child.create(data)).populate('parente', '-senha').execPopulate();

    return res.json({ message: 'Child registered', child });
  },
  async update(req, res) {
    const { id } = req.params;
    const data = req.body;

    const schema = yup.object().shape({
      nome: yup.string(),
      municipio: yup.string(),
      sexo: yup.string(),
      numeroDeclaracao: yup.string(),
      nascimento: yup.date(),
      frutas: yup.string(),
      industrializados: yup.string(),
      doces: yup.string(),
      refeicoes_na_mesa: yup.string()
    });

    await schema.validate(data, { abortEarly: false });

    const child = await Child.findById(id);

    if(child.parente != req.user.id)
      throw Error;
    
    await Child.updateOne(child, data, { new: true });
    
    const {peso, altura} = data;

    const imc = peso / altura * altura;

    await ChildData.create({ id_crianca: child._id, peso, altura, imc });

    return res.json({ message: 'Child registry updated successfully' });
  },
  async delete(req, res) {
    const { id } = req.params;

    const child = await Child.findById(id);

    if(child.parente === req.user.id) 
      await Child.deleteOne(child);

    return res.json({ message: 'Child registry deleted successfully'})
  },
}