function  teste1(num) {
  if(num > 7) 
    console.log(num);
    console.log('Final');  // Esse está fora do bloco
}

teste1(6);
teste1(8);


function  teste2(num) {
  if(num > 7); {
    console.log(num);
  } 
}

teste2(6);
teste2(8);

Number.prototype.retornaNum = function(inicio, fim) {
  return this >= inicio && this <= fim;
}

const imprimeResultado = function (nota) {
  if(nota.retornaNum(9, 10)) {
    console.log('Aprovado com louvor');
  }
  else if( nota.retornaNum(7, 8.99)) {
    console.log('Aprovado');
  }
  else if( nota.retornaNum(4, 6.99)) {
    console.log('Recuperação');
  }
  else if( nota.retornaNum(0, 3.99)) {
    console.log('Reprovado');
  }
  else {
    console.log('Nota inválida');
  }
}