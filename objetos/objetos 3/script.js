/*Aula 3*/
var nome = 'Lorraine';
nome.length;
nome.charAt(3);
nome.replace('Lora', 'reine');
nome;

var altura = 1.7;
altura.toString();
altura.toFixed();



var btn = document.querySelector('.btn');
btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou')
})

/*EXERCICIO*/
// nomeie 3 propriedades ou métodos de strings
var nomeCompleto = 'Lorraine Cristina';
nomeCompleto.toLowerCase();
nomeCompleto.length;
nome.charAt(13);

// busque na web um objeto (método) capaz de interagir com o clipboard, clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}