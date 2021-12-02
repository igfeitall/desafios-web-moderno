function CriarPessoa(nome){
  return {
    nome,
    falar: () =>{
      console.log(`Meu nome é ${nome}.`);
    }
  }
}

const p1 = CriarPessoa("Igor")
p1.falar()
