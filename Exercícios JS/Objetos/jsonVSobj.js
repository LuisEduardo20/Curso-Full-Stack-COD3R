const obj = { a : 1, b: 2, c: 3, soma(){ return a + b + c} }
console.log(JSON.stringify(obj)) // json é somente um formato de texto, por isso qualquer tipo de dado que não possa ser convertido para texto é descartado

 // console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) -> inválido
 // console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) -> inválido
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))