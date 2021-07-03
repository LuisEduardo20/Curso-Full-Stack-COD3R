console.log('a =', a);
var a = 2;
console.log('a =', a);

/*    É igual
var a;
console.log('a =', a);
a = 2;
console.log('a =', a);
*/

/*    Mesma coisa
function teste() {
  console.log('a =', a);
  var a = 2;
  console.log('a =', a);
}

teste();
*/

// Com o let o mesmo não ocorre
//console.log('b =', b); -> Aqui apresenta erro
let b = 2;
console.log('b =', b);