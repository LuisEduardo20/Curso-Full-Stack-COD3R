/**
* 15)​Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um 
* carro hatch, e a revendapossui, além de carros hatch, sedans, motocicletas e 
* caminhonetes. Utilizando uma estrutura switch, caso ocomprador queira o hatch, 
* retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: 
* “Tem certezaque não prefere este modelo?”. Caso seja especificado um modelo que 
* não está disponível, retorne no console:“Não trabalhamos com este tipo de automóvel 
* aqui”.
*/

function compraCarro(carro) {
  switch(carro) {
    case 'hatch':
      return 'Compra efetuada com sucesso'
    case 'sedan':
    case 'motocicleta':
    case 'caminhonetes':
      return 'Tem certeza que não prefere este modelo?'
    default:
      return 'Não trabalhamos com este tipo de automóvel aqui'
  }
}

console.log(compraCarro('hatch'))
console.log(compraCarro('sedan'))
console.log(compraCarro('motocicleta'))
console.log(compraCarro('caminhonetes'))
console.log(compraCarro('hilux'))