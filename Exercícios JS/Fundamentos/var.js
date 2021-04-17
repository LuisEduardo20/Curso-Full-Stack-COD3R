{
  {
    {
      {
        var sera = 'Será???';
        console.log(sera);
      }
    }
  }
}

console.log(sera);        // Aparece pois o bloco por si só não restringe

function teste() {
  var local = 123;
  console.log(local);
}

teste();
//console.log(local);       // Erro pois a variável só existe dentro da função

var numero = 1;
{
  var numero = 2;
  console.log('dentro =',    numero);
}
console.log('fora =', numero);