const sequence = {
  _id: 1,
  id: () => this._id++
}

const bd = {};

function createProduct(product){
  if(!product.id) product.id = sequence.id();
  bd[product.id] = product;

  return product;
}

function getProducts(){
  return Object.values(bd);
}

function getProduct(id){
  return bd[id] || {};
}

module.exports = {createProduct, getProduct, getProducts}