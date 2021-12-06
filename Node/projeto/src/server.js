//criar uma api rest com banco em memoria para manejar produtos
const express = require('express');
const bd = require('./database');

const port = 3003;
const app = express();

app.get('/products',(req,res) => {
  res.send(bd.getProducts)
})

app.get('/produtct/:id',(req,res) => {
  res.send(bd.getProduct(req.params.id))
})

app.post('/product', (req,res) => {
  const {nome, preco} = req.body;
  const produto = bd.createProduct({nome,preco})

  res.send(produto)
})

app.listen(port, () => {
  console.log(`servidor executando na porta ${port}.`);
})