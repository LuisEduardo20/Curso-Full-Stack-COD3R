// Criando meu próprio forEach

Array.prototype.forEach2 = function(array = this, indice = 0) {
  console.log(array)
  console.log(indice)
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2()