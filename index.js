const express = require('express');

const app = express();
const conn = require('./db/conn');
const PostRouter = require('./routes/PostRoutes');

require('dotenv').config();
PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/', PostRouter);


conn.sync()
try {
    app.listen(PORT,() => {
      console.log(`Servidor rodando na porta ${PORT} `)
    })
} catch (error) {
  console.log(error)
}