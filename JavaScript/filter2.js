Array.prototype.filter2 = function (callback){

  let resultado = []
  for(let i = 0; i < this.length; i++){
    if(callback(this[i], i, this)){
      resultado.push(this[i])
    }
  }

  return resultado
}

const produtos = [
  {nome: 'Notebook', preco: 2499, fragil: true},
  {nome: 'iPad Pro', preco: 4199, fragil: false},
  {nome: 'Notebook', preco: 1500, fragil: true},
  {nome: 'Copo', preco: 15, fragil: false}
]

const resultado = produtos.filter2(e => e.preco >= 500).filter2( e => e.fragil)
console.log(resultado)