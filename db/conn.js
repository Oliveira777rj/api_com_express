const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(

  process.env.MYSQL_DB,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,{

  host:process.env.MYSQL_HOST,
  dialect:process.env.MYSQL_DIALECT,
  logging:false
  }
)

try {
  sequelize.authenticate()
  console.log('Conexao com banco de dados estabelecido com sucesso!')
} catch (error) {
  console.log(`Ocorreu um erro na conexao com banco de dados ${error}` )
}
module.exports = sequelize;