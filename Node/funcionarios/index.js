// descobrindo a mulher chinesa com o menor salário
const axios = require('axios');

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

//funções para mapeamento do objeto
const acharMulher = f => f.genero === 'M';
const acharChines = f => f.pais === 'China';
const menorSalario = (acc,cur) => {
   if(cur.salario <= acc.salario) return cur
   else return acc
} 

axios.get(url).then(res => {
  const funcionarios = res.data;

  const mulheresChinesas = funcionarios.filter(acharMulher).filter(acharChines);
  const resultado = mulheresChinesas.reduce(menorSalario)

  console.log(resultado);
})