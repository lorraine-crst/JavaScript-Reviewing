var idiomasFalados = ['English', 'Italian', 'French', 'Spanish', 'Portugues'];

for(var item = 0; item < idiomasFalados.length; item++){
    console.log(idiomasFalados[item]);
}


idiomasFalados.pop(); // Remove o último item e retorna ele
idiomasFalados.push('3DS'); // Adiciona ao final da array
idiomasFalados.length; // 3

/*Contando de 10 a 30 com for loop*/
for (var numero = 10; numero < 31; numero++){
console.log(numero);
}


/*Contando de 10 a 50 com while loop*/
var i = 10;
while ( i < 51){
    console.log(i)
    i++;
}


//Usando o break
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if(videoGames[i] === 'PS4') {
    break;
  }
}


//EXERCICIO

// Crie uma array com os anos que o Brasil ganhou a copa 1959, 1962, 1970, 1994, 2002
var anoCopaGanhada = [1959, 1962, 1970, 1994, 2002];
// Interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for(var i = 0; i < anoCopaGanhada.length; i++){
  console.log('O brasil ganhou a copa nos seguintes anos::', anoCopaGanhada[i]);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if(frutas[i] === 'Pera') {
    break;
  }
}
// Coloque a última fruta da array acima em uma variável, sem remover a mesma da array.
var ultimaFruta = frutas[4];