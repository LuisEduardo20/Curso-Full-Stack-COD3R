/**
 * Filtrar todas as funcionárias que sejam:
 * - chinesa
 * - mulher
 * - com o menor salário
 */

 const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
 const axios = require('axios');
 
 axios.get(url)
 .then( response => {
   const funcionarios = response.data
 
   const funcionarias_chinesas = funcionarios.filter(funcionario => {
     if(funcionario.pais === 'China' && funcionario.genero === 'F') return funcionario
   })
 
   const salarios = funcionarias_chinesas.map(funcionaria => funcionaria.salario)
   .sort((a, b) => a - b)
 
   const funcionaria_chinesa_com_menor_salario = funcionarias_chinesas.filter( funcionaria => {
     if(funcionaria.salario <= salarios[0]) return funcionaria
   })
   console.log(funcionaria_chinesa_com_menor_salario)
 })