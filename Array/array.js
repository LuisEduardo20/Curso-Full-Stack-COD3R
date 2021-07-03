// O array em JS é um objeto especial com características próprias
console.log(typeof Array, typeof new Array, typeof [])

// O [] é um objeto indexado com tamanho dinâmico e que os tipos que ele pode possuir são variádos
let aprovados = new Array('Bia', 'Carlos', 'Ana') // Opção não tão recomendada
console.log(aprovados);
//            [0]      [1]     [2]
aprovados = ['Bia', 'Carlos', 'Ana'] // Opção recomendada
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); // qualquer valor passado no index que seja maior que a quantidade real do array será undefined

aprovados[3] = 'Paulo' // Adicionando um valor ao array
aprovados.push('Abia') // Outra forma de adicionar, mais recomendada
console.log(aprovados.length);

aprovados[9] = 'Rafael' // Adiciona a string 'Rafael' na posição 9 do vetor e todas as anteriores que não foram definidas ficam como undefined
console.log(aprovados.length);
console.log(aprovados[8] === undefined) // true pois a posição do array nunca teve nenhum valor declarado
console.log(aprovados[8] === null) // false

console.log(aprovados)
aprovados.sort() // Ordena o array
console.log(aprovados)

// Excluindo elementos de um array
delete aprovados[1] // Ele não diminui o tamanho do array, somente coloca undefined na posição deletada
console.log(aprovados[1])
console.log(aprovados[2]) // Não foi alterado a posição

// Splice serve para adicionar elementos em um determinado índice
// remover em um determinado índice e até remover e adicionar ao mesmo tempo
// Array.prototype.splice(Posição do elemento que quero trabalhar, quantidade de elementos a excluir depois do indicado inicialmente, 'Elemento que desejo adicionar')
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // Na posição 1 do array exclui 1 elemento
console.log(aprovados)
aprovados.splice(1, 0, 'Eduardo', 'Alzeni') // Na posição 1 do array exclui 0 elementos e adiciona 'Eduardo' e 'Alzeni' a partir do elemento  1
console.log(aprovados)

// OBS.: Criar um array a partir de const não impede que os seus elementos possam ser alterados, só que
// o endereço de memória apontado sempre será o mesmo