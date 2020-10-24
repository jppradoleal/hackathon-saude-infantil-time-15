const Child = require('../models/Child');
const ChildData = require('../models/ChildData');
const yup = require('yup');

module.exports = {
  async show(req, res) {
    const { id } = req.params;
    
    const child = await Child.findById(id);

    return res.json({ message: "Child registry found", child })
  },

  async index(req, res) {
    const childs = await Child.find();
    
    return res.json({ message: 
      childs.length ? 
        "Multiple children registries found" : 
        "No children registries found", 
      childs});
  },

  async store(req, res) {
    const {
      nome_da_crianca,
      nome_da_mae,
      nome_do_pai,
      municipio_nascimento,
      endereco,
      ponto_referencia,
      telefone,
      bairro,
      cep,
      cidade,
      uf,
      sexo_biologico,
      raca,
      endereco_un_basica_frequentada,
      num_prontuario,
      num_declaracao_nascido_vivo,
      num_registro_civil_nascimento,
      num_cartao_sus,
      data_de_nascimento,
      peso,
      altura
    } = req.body;

    const data = {
      nome_da_crianca,
      nome_da_mae,
      nome_do_pai,
      municipio_nascimento,
      endereco,
      ponto_referencia,
      telefone,
      bairro,
      cep,
      cidade,
      uf,
      sexo_biologico,
      raca,
      endereco_un_basica_frequentada,
      num_prontuario,
      num_declaracao_nascido_vivo,
      num_registro_civil_nascimento,
      num_cartao_sus,
      data_de_nascimento
    }

    const schema = yup.object().shape({
      nome_da_crianca: yup.string().required(),
      nome_da_mae: yup.string().required(),
      nome_do_pai: yup.string().required(),
      municipio_nascimento: yup.string().required(),
      endereco: yup.string().required(),
      ponto_referencia: yup.string(),
      telefone: yup.string(),
      bairro: yup.string().required(),
      cep: yup.string().required(),
      cidade: yup.string().required(),
      uf: yup.string().required().max(2),
      sexo_biologico: yup.string().required(),
      raca: yup.string().required(),
      endereco_un_basica_frequentada: yup.string().required(),
      num_prontuario: yup.string(),
      num_declaracao_nascido_vivo: yup.string(),
      num_registro_civil_nascimento: yup.string(),
      num_cartao_sus: yup.string().required(),
      data_de_nascimento: yup.date().required()
    })

    await schema.validate(data, { abortEarly: false });
  
    const child = await Child.create(data);
    
    const dataChild = {
      id_crianca: child.id,
      peso,
      altura
    };

    const childData = await ChildData.create(dataChild);

    return res.json({ message: "Child registered", child: {
      ...child._doc,
      child_data: {...childData._doc}
    } });
  },
  async update(req, res) {
    const { id } = req.params;
    const {
      nome_da_crianca,
      nome_da_mae,
      nome_do_pai,
      municipio_nascimento,
      endereco,
      ponto_referencia,
      telefone,
      bairro,
      cep,
      cidade,
      uf,
      sexo_biologico,
      raca,
      endereco_un_basica_frequentada,
      num_prontuario,
      num_declaracao_nascido_vivo,
      num_registro_civil_nascimento,
      num_cartao_sus,
      data_de_nascimento,
      peso,
      altura
    } = req.body;

    const data = {
      nome_da_crianca,
      nome_da_mae,
      nome_do_pai,
      municipio_nascimento,
      endereco,
      ponto_referencia,
      telefone,
      bairro,
      cep,
      cidade,
      uf,
      sexo_biologico,
      raca,
      endereco_un_basica_frequentada,
      num_prontuario,
      num_declaracao_nascido_vivo,
      num_registro_civil_nascimento,
      num_cartao_sus,
      data_de_nascimento
    }

    const schema = yup.object().shape({
      nome_da_crianca: yup.string().required(),
      nome_da_mae: yup.string().required(),
      nome_do_pai: yup.string().required(),
      municipio_nascimento: yup.string().required(),
      endereco: yup.string().required(),
      ponto_referencia: yup.string(),
      telefone: yup.string(),
      bairro: yup.string().required(),
      cep: yup.string().required(),
      cidade: yup.string().required(),
      uf: yup.string().required().max(2),
      sexo_biologico: yup.string().required(),
      raca: yup.string().required(),
      endereco_un_basica_frequentada: yup.string().required(),
      num_prontuario: yup.string(),
      num_declaracao_nascido_vivo: yup.string(),
      num_registro_civil_nascimento: yup.string(),
      num_cartao_sus: yup.string().required(),
      data_de_nascimento: yup.date().required()
    });

    await schema.validate(data, { abortEarly: false });

    const child = await Child.findByIdAndUpdate(id, data, { new: true });
    const childData = await ChildData.findOneAndUpdate(
      { id_crianca: child._id }, 
      { peso, altura }
    );

    return res.json({ message: "Child registry updated successfully", child: {
      ...child,
      child_data: {...childData}
    } });
  },
  async delete(req, res) {
    const { id } = req.params;

    await Child.findOneAndDelete(id);

    return res.json({ message: "Child registry deleted successfully"})
  },
}