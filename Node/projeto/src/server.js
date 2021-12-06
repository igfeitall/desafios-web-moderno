//criar uma api rest com banco em memoria com CRUD de produtos
const express = require('express');
const bd = require('./database');

const port = 3003;
const app = express();

app.use(express.json());

//CREATE
app.post('/product', (req,res) => {
  const {nome, preco} = req.body;
  const produto = bd.createProduct({nome,preco})

  res.send(produto)
})

//READ
app.get('/product',(req,res) => {
  res.send(bd.getProducts())
})

app.get('/product/:id',(req,res) => {
  res.send(bd.getProduct(req.params.id))
})

//UPDATE
app.put('/product/:id', (req,res) => {
  const id = Number.parseInt(req.params.id);
  const {nome, preco} = req.body;
  const produto = bd.createProduct({id, nome, preco})

  res.send(produto)
})

//DELETE
app.delete('/product/:id', (req,res) => {
  const produto = bd.deleteProduct(req.params.id);

  res.send(produto)
})

app.listen(port, () => {
  console.log(`servidor executando na porta ${port}.`);
})