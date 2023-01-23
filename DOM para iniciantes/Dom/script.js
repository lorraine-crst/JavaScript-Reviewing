window.alert('Evoluindo em JS')

const href = window.location.href;
console.log(href);

if (href === 'http://127.0.0.1:5500/Dom/index.html'){
    console.log('Voce esta no Http certo');
} else{
    console.log('Voce esta no Http errado');
}

const selecionaH1 = document.querySelector('h1');