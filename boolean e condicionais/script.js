// Triagem de hospital
var nomePaciente = 'Lorraine';
if (nomePaciente){
    console.log(nomePaciente)
} else {
    console.log('Paciente impossibilitado de dizer o nome')
}

var idade = 21;
var menorDeIdade = idade < 18;
if (idade >= 18){
    console.log(idade)
} else if (menorDeIdade){
    console.log('Paciente deve estar acompanhado por ter idade inferior a idade legal no pais')
}
else {
    console.log('Paciente impossibilitado de dizer a idade')
}

var teveCovid = false,
    naoSabe = true;

if(teveCovid) {
    console.log('Teve covid')
} else if(naoSabe) {
    console.log('Não sabe se teve covid')
} else {
    console.log('Não teve covid')
}


var sentiuSintomas = true;
if (sentiuSintomas) {
    console.log('Esta pessoa teve sintomas')
} else {
    console.log('Esta pessoa não teve sintomas')
}


var ficouDeQuarentena = false;
if (ficouDeQuarentena) {
    console.log('Esta pessoa ficou de quarentena')
} else {
    console.log('Esta pessoa não ficou de quarentena')
}


var alguemProximoTeveCovid = false,
    naoSabe = true;
if (alguemProximoTeveCovid) {
    console.log('Provavelmente pegou covid por terceiros')
} else if (naoSabe) {
    console.log('Recomendavel fazer exame por não saber se teve poximidade com o virus')
} else {
    console.log('Provavelmente não possui o virus no corpo')
}


var doencasGeneticas = false;
var naosabeSePossui = true;
if (doencasGeneticas) {
    console.log('Possui doença genetica, faz parte do grupo de risco')
}  else if (naosabeSePossui) {
    console.log('Esta pessoa não sabe se possui ou não doenças geneticas')
} else {
    console.log('Não possui doença genetica')
}

/* 
10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true
*/


