function ImprimeÍmpar(inicio=0, fim=100){
  for(let i=inicio; i<=fim;i++){
    if(i%2 != 0){
      console.log(i);
    }
  }
}

ImprimeÍmpar(0,500)