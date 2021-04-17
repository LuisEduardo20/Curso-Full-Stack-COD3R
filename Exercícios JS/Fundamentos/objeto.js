const prod1 = {};
prod1.nome = 'Moto E5 Play';
prod1.preco = 600.00;
prod1["Desconto Legal"] = 450.00;           // Evitar atributos com espaço

console.log(prod1);

const prod2 = {
  nome: 'Camisa gola V',
  preco: 80.00,
  
  objFilho: {

    idade: 28,

    objNeto: {
      nome: 'bla bla',
      idade: 20
    }
  }
};