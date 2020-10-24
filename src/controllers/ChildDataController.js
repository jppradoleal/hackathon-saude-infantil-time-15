const ChildData = require('../models/ChildData');
const Child = require('../models/Child');

module.exports = {
  async show(req, res) {
    const { id: parent_id } = req.user;
    const { id } = req.params;

    const child = await Child.findById(id);

    if(child.parente == parent_id) {
      const data = await ChildData.find({id_crianca: id})
  
      return res.json(data);
    }

    return res.status(400).json('No child data found');
  },
  async index(req, res) {
    const {id} = req.user;

    let data = await ChildData.find().populate('id_crianca', 'parente nome_da_crianca').exec();

    const returnedData = data.filter(child => child.id_crianca.parente == id);

    return res.json(returnedData);
  }
}