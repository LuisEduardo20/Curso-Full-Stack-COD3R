/**
 * 21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
 * considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
 * de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
 * idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
 */

function planoSaude(idade) {
  
  const valFixo = 100
  
  if(idade < 10) {
    let valAPagar = 100 + 80 
    console.log(`O valor a ser pago será ${valAPagar}`)
  }
  else if(idade >= 10 && idade <= 30) {
    let valAPagar = 100 + 50 
    console.log(`O valor a ser pago será ${valAPagar}`)
  }
  else if(idade > 30 && idade < 61) {
    let valAPagar = 100 + 95 
    console.log(`O valor a ser pago será ${valAPagar}`)
  }
  else if(idade > 60) {
    let valAPagar = 100 + 130 
    console.log(`O valor a ser pago será ${valAPagar.toFixed(2)}`)
  }
  
}

planoSaude(1)
planoSaude(21)
planoSaude(50)
planoSaude(86)