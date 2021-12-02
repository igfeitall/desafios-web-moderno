Array.prototype.map2 = function(callback){

  let result = []
  for(let i = 0; i < this.length; i++){
    aux = callback(this[i],i,this)
    result.push(aux)
  }

  return result
}

const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de Lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}'
]

const precos = carrinho.map2(e => JSON.parse(e).preco)

console.log(precos);