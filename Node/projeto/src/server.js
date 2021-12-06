const express = require('express');

const port = 3003;
const app = express();

app.get('/products',(req,res,next) => {
  res.send({nome: "Notebook", preco:123.45})
})

app.listen(port, () => {
  console.log(`servidor executando na porta ${port}.`);
})