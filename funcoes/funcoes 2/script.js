//Verificando se e maior de idade
function maioridade(idade) {
    if(typeof idade != 'number') {
      return 'Informe a sua idade!';
    } else if(idade >= 18) {
      return console.log('voce ja se encaixa na maioridade penal');
    } else {
      return console.log('voce ainda tem menos de 18 anos');
    }
  }
maioridade(18);

/*EXERCICIO*/
// Crie uma função para verificar se um valor é Truthy

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(quadrado){
  return 4 * quadrado;
}

console.log(perimetro(18));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
  return nome + ' ' + sobrenome;
}
console.log(nomeCompleto('Lorraine', 'Cristina'));

// Crie uma função que verifica se um número é par
function verificacaoPar (par) {
  if (par % 2 == 0) {
      console.log('O numero é par')
  } else { 
      console.log('O numero é impar')
  }
}   
verificacaoPar(100);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(dado){
  return typeof dado;
}


// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);