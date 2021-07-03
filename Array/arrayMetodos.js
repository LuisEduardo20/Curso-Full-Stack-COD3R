const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o último elemento
console.log(pilotos)

pilotos.push('Verstappen') // adiciona o elemento na última posição do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento na primeira posição
console.log(pilotos)

// adicionando com splice()
pilotos.splice(2, 0, 'Bottas', 'Massa') // na posição 2 do array não exclui nenhum elemento e a partir da posição 2 adiciona 2 elementos
console.log(pilotos)

// removendo com splice()
pilotos.splice(1, 1) // na posição 1 do array remove um elemento
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // novo array com todos os elementos a partir da posição 2
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1, 4) // começa a pegar na posição 1 vai até a última -1 (3)
console.log(algunsPilotos2)