// SWITCH

var corFavorita = 'azul';

switch (corFavorita) {
    case 'azul' : 
    console.log('O azul é a cor da confiança, da harmonia e do equilíbrio, sendo, por isso, muito associada ao profissionalismo e a segurança.')
    break;
    case 'vermelho' : 
    console.log('Enquanto o azul comunica tranquilidade, o vermelho está associado a impetuosidade, a sedução e ao dinamismo. ')
    break;
    case 'amarelo' : 
    console.log('Se você tem o amarelo como cor favorita, é possível que você seja bem-humorado, ambicioso e empreendedor, podendo ser considerada uma pessoa iluminada')
    break;
    case 'roxo' : 
    console.log('Pessoas com o roxo como cor favorita costumam ser intrigantes, misteriosas, adoráveis e muito ligadas a fé. O roxo também está ligado a sensações como arrogância, sensibilidade, erotismo e intimidade.')
    break;
    default :
    console.log('Voce não possui uma cor favorita')
}



/*Exercicio*/
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 21;
var idadeIrma = 18;

if (minhaIdade > idadeIrma){
    console.log('Voce é mais velha que sua irma')
} else if (minhaIdade === idadeIrma){
    console.log('Voces possuem a mesma idade')
} else {
    console.log('Sua irma e mais velha que voce')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china){
    console.log('Brasil tem mais habitantes que China')
} else {
    console.log('China tem mais habitantes que no Brasil')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
  } else {
    console.log('Falso');
  }

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');
  } else {
    console.log('Falso');
  }