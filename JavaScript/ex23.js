//classe do aluno
class Aluno{
  constructor(cod,nota1,nota2,nota3){
    this.cod = cod
    this.notas = [nota1,nota2,nota3]
  }
}

//criação do banco de alunos
const alunos = [new Aluno(1,5,6,7), new Aluno(2,4,5,2), new Aluno(3,7,8,10), new Aluno(4,1,6,5), new Aluno(-1,0,0,0), new Aluno(5,10,20,1)]

//retorna o indice do maior valor de uma lista
function maior(notas){
  let maior = 0
  for(let i in notas){
    if(notas[i] > maior) maior = i
  }
  return maior
}

//retorna se uma nota é aprovada
const aprovado = nota => nota>=5 ? "APROVADO" : "REPROVADO"

//processa os dados de um aluno
function Processa(aluno){

  //pega o indice da maior nota
  let maiorNota = maior(aluno.notas)
  //processa as notas aplicando os pesos levando em conta a maior nota
  let notasProcessadas = aluno.notas.map((value,index) => index === maiorNota ? value*4 : value*3)
  //faz a soma de todos os elementos do array e calcula a média
  let soma = notasProcessadas.reduce((acc,cur) => acc + cur)
  let mean = soma/10

  return `
    Código: ${aluno.cod}
    Nota1: ${aluno.notas[0]}
    Nota2: ${aluno.notas[1]}
    Nota3: ${aluno.notas[2]}
    Média: ${mean}
    Resultado: ${aprovado(mean)}`
}

let i = 0
while((alunos[i] != undefined) && (alunos[i].cod >= 0)){
  console.log(`
  aluno: ${i} {${Processa(alunos[i])}
  }`);
  i++;
}
