function trabalho(salario, plano) {
  switch(plano) {
    case 'A':
      return salario + (salario * (10/100))
    case 'B':
      return salario + (salario * (15/100))
    case 'C':
      return salario + (salario * (20/100))
    default:
      return 'Plano inválido'
  }
}

console.log(trabalho(1500, 'A'))
console.log(trabalho(1500, 'B'))
console.log(trabalho(1500, 'C'))
console.log(trabalho(1500, 'D'))