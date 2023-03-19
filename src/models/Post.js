const { DataTypes } = require('sequelize');
const db = require('../db/conn');

const Post = db.define('Postagem', {

  title: {
    type:DataTypes.STRING,
    required:true
  },
  body: {
    type:DataTypes.STRING,
  }
})
module.exports = Post;