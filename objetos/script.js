var meusDados = {
    nome: 'Lorraine',
    idade: 21,
    profissao: 'Desenvolvedora'
}
console.log(meusDados.nome);


//this = o valor da variavel sem precisaar repeti-la
var quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado;
    },
    perimetro: function(lado){
        return this.lados * lado;
    }
}
console.log(quadrado.area(15));
console.log(quadrado.perimetro(25));


