const ChildData = require('../models/ChildData');
const Child = require('../models/Child');

module.exports = {
  async show(req, res) {
    const { id: parent_id } = req.user;

    const child = await Child.find({ parente: parent_id });

    const data = await Promise.all(child.map(async (c) => {
      const temp = await ChildData.find({id_crianca: c._id});
      return temp;
    }));
    return res.json(data);
  },
  async index(req, res) {
    let data = await ChildData.find().populate('id_crianca', 'nome municipio sexo frutas industrializados doces refeicoes_na_mesa nascimento').exec();

    return res.json(data);
  }
}