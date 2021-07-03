/**
 * 34)​ Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
 * todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

function isEqual(str1, str2) {
  // Separar cada caractere da primeira string em uma variável separada
  let contained1 = []
  for(let i = 0 ; i < str1.length ; i++) {
    contained1.push(str1.charAt(i))
    // Verificar se esse caractere está dentro do segundo vetor
  }
  console.log(contained1)
}

//console.log(isEqual('teste', 'teste1'))
isEqual('teste', 'teste1')