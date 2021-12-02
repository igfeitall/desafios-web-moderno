function CriarPessoa(nome){ 
  let nome = nome

  this.falar = () => {
    console.log(`Meu nome é ${this.nome}`);
  }

}

const p1 = new CriarPessoa("Igor")
p1.falar()
