// CALCULANDO AREA CIRCULO

function pi() {
    return 3.14;
}

var areaCirculo = 3 ** 2 * pi();
console.log(areaCirculo);


//CALCULANDO IMC
function imc(peso, altura) {
    const imc = peso / (altura ** 2)
    if (imc <= 18) {
        console.log('Voce esta na faixa de magreza, procure um nutricionista')
    } else if (imc >= 18 && imc < 25) {
        console.log('Voce esta na faixa de peso normal')
    } else if (imc >= 25 && imc < 29) {
        console.log('Voce esta na faixa de sobrepeso, procure um nutricionista')
    } else if (imc >= 29 && imc < 40) {
        console.log('Voce esta na faixa da obesidade, procure um nutricionista')
    } else if (imc >= 40) {
        console.log('Voce esta em obesidade morbida, procure um nutricionista')
    } else {
        console.log('Sem parametros o suficiente para validar op seu imc')
    }
    return imc;
}


console.log(imc(57, 1.70));


// COR FAVORITA
function corFavorita(cor){
    if (cor == 'azul') {
        console.log('Ter essa cor favorita significa que você é uma pessoa que age pela emoção e intuição.')
    } else if (cor == 'verde') {
        console.log('O verde é a cor da natureza. Consequentemente o verde inspira tranquilidade, bem estar, paz, liberdade.')
    } else if (cor == 'preto') {
        console.log('O preto é a cor favorita de muitos. No entanto, uma das suas características marcantes é representar a personalidade introspectiva e misteriosa.')
    }  else if (cor == 'branco') {
        console.log('Ela traz tranquilidade, paz, harmonia e pureza. Geralmente quem gosta muito de branco tende a ser uma pessoa mais pacífica e paciente.')
    } else {
        console.log('Voce não tem cor favorita')
    }
}

corFavorita('branco');



addEventListener('click', function() {
    console.log('Oi');
  });

  