function mostrarCarro() {
    carro = 'Fusca';
    console.log(carro);
}  
mostrarCarro(); 
console.log(carro);


function mostrarCarro() {
    carro = 'Fusca';
    console.log(carro);
}
mostrarCarro(); // Fusca
console.log(carro); // Fusca
  


/*Exercicio */
// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
    console.log(cor, marca, portas); //estava chamando var ao inves de cor
  }
 
  
  // Como corrigir o erro abaixo?
  const dois = 2;
  function somarDois(x) {
    return x + dois;
  }
  function dividirDois(x) {
    return x + dois;
  }
  somarDois(4);
  dividirDois(6); // a constante estava dentro do escopo somarDois
  
  // O que fazer para total retornar 500?
  let numero = 50;
  
  for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
  }
  
  const total = 10 * numero;
  console.log(total);