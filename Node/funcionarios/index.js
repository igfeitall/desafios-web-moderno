const axios = require('axios');

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

axios.get(url).then(res => {
  const funcionarios = res.data;
  console.log(funcionarios);
})