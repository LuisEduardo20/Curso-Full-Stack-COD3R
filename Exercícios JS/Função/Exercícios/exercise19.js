function compraLanche(lanche, qtd) {
  switch(lanche) {
    case 100:
      console.log(`Valor total: R$ ${(3 * qtd).toFixed(2)}`)
      break
    case 200:
      console.log(`Valor total: R$ ${(4 * qtd).toFixed(2)}`)
      break
    case 300:
      console.log(`Valor total: R$ ${(5.50 * qtd).toFixed(2)}`)
      break
    case 400:
      console.log(`Valor total: R$ ${(7.50 * qtd).toFixed(2)}`)
      break
    case 500:
      console.log(`Valor total: R$ ${(3.50 * qtd).toFixed(2)}`)
      break
    case 600:
      console.log(`Valor total: R$ ${(2.80 * qtd).toFixed(2)}`)
      break
    default:
      console.log(`Este produto não existe`)
      break
  }
}

compraLanche(100, 2)
compraLanche(200, 1)
compraLanche(300, 3)
compraLanche(400, 2)
compraLanche(500, 1)
compraLanche(600, 4)
compraLanche(700, 10)