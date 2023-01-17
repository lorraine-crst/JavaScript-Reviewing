// Aula 2
var menu = {
    cor: 'rosa',
    height: 50,
    background: '#84e'
}
console.log(menu.background);


var pagina = {
    width: 800,
  }
  
pagina.hasOwnProperty('width') // true
pagina.hasOwnProperty('height') // false

/*EXERCICIO*/

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
    nome: 'Lorraine',
    sobrenome: 'Cristina',
    idade: 21,
    profissao: 'Desenvolvedora'
}
console.log(dadosPessoais);

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function (){
    return `${this.nome} ${this.sobrenome}`;
}
console.log(dadosPessoais.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}
carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var dadosCachorro = {
    raca: 'Labrador',
    idade: 10,
    cor: 'Preto',
    latir(pessoa){
        if (pessoa === 'homem'){
            return 'O cachorro latiu'
        }
        else{
            return 'o cachorro não latiu'
        }
    }
}
console.log(dadosCachorro.latir('homem'));