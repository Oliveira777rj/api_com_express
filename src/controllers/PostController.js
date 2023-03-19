const Post = require('../models/Post');

module.exports = class PostController {

  static async createPost(req,res){
    
    const posts = {

      title:req.body.title,
      body: req.body.body
    }
    await Post.create(posts)
    res.send('Postagem criada com sucesso')
  }

  static async allPost(req,res){
    const posts = await Post.findAll({raw:true})
    res.json(posts).status(200)
  }

  static async postOne(req,res){
    const id = req.params.id

    const post = await Post.findOne({where:{id}})

    res.json(post)
  }

  static async removePost(req,res){
    const id = req.params.id

    await Post.destroy({where:{ id }})
    res.json('Postagem excluida com sucesso').status(202)
  }

  static async updatePost(req,res){
    const id = req.params.id
    const { title, body } = req.body

    const postData = {

      title,
      body
    }

    await Post.update(postData, {where: { id }})
    res.json('Postagem atualizada com sucesso').status(200)
  }
}