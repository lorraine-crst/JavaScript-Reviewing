var nome = 'Lorraine'; // String
console.log(typeof nome);

var idade = 21; // Number
console.log(typeof idade);

var possuiFaculdade = true; // Boolean
console.log(typeof possuiFaculdade);

var time; // Undefined
console.log(typeof time);

var comida = null; // Null
console.log(typeof comida);

var simbolo = Symbol() // Symbol
console.log(typeof simbolo);

var novoObjeto = {} // Object
console.log(typeof novoObjeto);


var nome = 'Lorraine',
    sobrenome = 'Cristina'; 
console.log(nome + ' ' + sobrenome);


// SEM TEMPLATE
var poupanca = 1000;
var frase = 'Este mes poupei ' + poupanca + ' reais';
console.log(frase);

//TEMPLATE STRING
var salario = 2000; 
var fraseSalario = `Este mes recebi ${salario} reais de salario`;
console.log(fraseSalario);

/*Exercicio*/
// Declare uma variável contendo uma string
var contendoString = 'isto é uma string';
console.log(contendoString);

// Declare uma variável contendo um número dentro de uma string
var numero = '21'; 
console.log(numero);

// Declare uma variável com a sua idade
var minhaIdade = 21;
console.log(minhaIdade);

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var Nome = 'Lorraine',
    Sobrenome = 'Cristina';
var nomeCompleto = Nome + ' ' + Sobrenome; 
console.log(nomeCompleto);
// Coloque a seguinte frase em uma variável: It's time
var seguinteFrase = "It's time";
console.log(seguinteFrase);

// Verifique o tipo da variável que contém o seu nome
console.log(typeof nomeCompleto);