/*
 * 02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho 
 * de seus lados:Equilátero: Os três lados são iguais. Isósceles:  
 * Dois lados iguais. Escaleno: Todos os lados são diferentes.
 * Crie uma função que recebe os comprimentos dos três lados de um 
 * triângulo e retorne sua classificação quantoao tamanho de seus lados.
 * (Neste exemplo deve-se abstrair as condições matemáticas de existência 
 * de umtriângulo).
 */

function squareType(side1, side2, side3) {
  if(side1 === side2 && side2 === side3){
    console.log('Isóceles');
  }
  else if(side1 === side2 || side2 === side3 || side1 === side3) {
    console.log('Escaleno');
  }
  else {
    console.log('Equilátero');
  }
}

squareType(1, 2, 3)
squareType(1, 2, 1)
squareType(1, 1, 1)