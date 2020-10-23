const Nurse = require('../models/Nurse');
const yup = require('yup');

module.exports = {
  async index(req, res) {
    const nurses = await Nurse.find();

    return res.json(nurses);
  },
  async show(req, res) {
    const {id} = req.params;

    const nurse = await Nurse.findById(id);

    return res.json(nurse);
  },
  async store(req, res) {
    const data = req.body;

    let schema = yup.object().shape({
      nome: yup.string().required(),
      cod_unidade: yup.string().required(),
      numero_sus: yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false
    });

    const nurse = await Nurse.create(data);

    return res.status(201).json({ message: "Created Nurse Successfully", nurse });
  },
  async update(req, res) {
    const { id } = req.params;

    const data = req.body;

    const schema = yup.object().shape({
      nome: yup.string(),
      cod_unidade: yup.string(),
      numero_sus: yup.string(),
    });

    await schema.validate(data, { 
      abortEarly: false
    });

    const nurse = await Nurse.findByIdAndUpdate(id, data, {
      new: true
    });

    if(!nurse) {
      let err = new yup.ValidationError([], "User update", "user");
      err.inner = [new yup.ValidationError("User ID not found", null, "ID")];
      throw err;
      throw err;
    }

    return res.status(202).json({ message: "Updated Nurse Successfully", nurse});
  },
  async delete(req, res) {
    const { id } = req.params;

    await Nurse.findByIdAndDelete(id);

    return res.json({ message: "Deleted Nurse Successfully" });
  }
}