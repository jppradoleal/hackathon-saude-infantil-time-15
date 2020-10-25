module.exports = {
  async render(child) {
    return {
      nome_da_crianca: child.nome_da_crianca,
      municipio_nascimento: child.municipio_nascimento,
      sexo_biologico: child.sexo_biologico,
      raca: child.raca,
      atividades_fisicas: child.atividades_fisicas,
      comida_industrializada: child.atividades_fisicas,
      frequenta_medico: child.frequenta_medico,
      idade: Math.floor((new Date() - new Date(child.data_de_nascimento).getTime()) / 3.15576e+10)
    }
  },

  async renderMany(children) {
    return children.map(child => render(child));
  } 
}