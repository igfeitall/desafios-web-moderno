const sequence = {
  _id: 1,
  get id() { return this._id++ }
}

const bd = {};

function createProduct(product){
  if(!product.id) product.id = sequence.id;

  return product;
}

function getProducts(){
  return Object.values(bd);
}

function getProduct(id){
  return bd[id] || {};
}

function deleteProduct(id){
  const produto = bd[id];
  delete bd[id];

  return produto;
}

module.exports = {createProduct, getProduct, getProducts, deleteProduct}