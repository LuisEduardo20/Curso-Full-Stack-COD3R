function getInteiroEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
};

let opcao = -1;  // Funciona com o -1 pois ele executa pelo menos uma vez antes da condição ser false

do{
  opcao = getInteiroEntre(-1, 10);
  console.log(`Opção escolhida foi ${opcao}`);
}
while (opcao != -1);