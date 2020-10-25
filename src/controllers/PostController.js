const yup = require('yup');
const User = require('../models/User');
const Post = require('../models/Post');

module.exports = {
  async create(req, res) {
    const data = req.body;
    
    const image = req.file;

    const schema = yup.object().shape({
      titulo: yup.string().required().max(150),
      link: yup.string().required().url(),
      descricao: yup.string().required().max(255),
      tag: yup.string().required().max(15) 
    });

    await schema.validate(data, { abortEarly: false });

    const isAdmin = (await User.findById(req.user.id)).tipo === 'ADMIN';
    if(isAdmin) {
      const caminho_da_imagem = `${process.env.API_URL}/uploads/${image.filename}`;

      const post = await Post.create({...data, caminho_da_imagem});


      return res.status(201).json({ message: "Post created successfully", post })
    }

    return res.status(401).json({message: "Not authorized"})
  },

  async index(req, res) {
    const { page=0, postsByPage=10 } = req.query;
    const posts = await Post.find().sort({_createdAt: -1}).skip(page*Number(postsByPage)).limit(Number(postsByPage));
    return res.json(posts);
  }
}