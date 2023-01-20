var idade = 22; 
var naoTomaRemedio = true;

var podeDirigir = (idade >= 18 && naoTomaRemedio) ? 'Pode dirigir' : 'Não pode dirigir';
console.log(podeDirigir);


// EXERCICIO

// Some 500 ao valor de scroll abaixo, atribuindo o novo valor a scroll
var scroll = 1000;
var total = scroll + 500;
console.log(total);

// Atribua true para a variável darCredito, caso o cliente possua carro e casa. E false caso o contrário.
var possuiCarro = true;
var possuiCasa = false;

var darCredito = (possuiCarro && possuiCasa) ? 'Podemos emprestar o credito, cumpre os pre-requisitos' : 'Não podemos emprestar o credito, não cumpre os pre-requisitos';
console.log(darCredito);