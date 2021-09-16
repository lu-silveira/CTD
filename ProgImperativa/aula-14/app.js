// Atividade I: Converta o documento html para javascript
//             Atividade II: Converta objeto literal em função construtora
var ContaBancaria = require ('./ContaBancaria');

var cliente = new ContaBancaria();
console.log(cliente.visualizarSaldo());
console.log(cliente.deposito(100));

//             Atividade III: Divida o código em módulo

//Salvei arquivo como ContaBancaria.js e criei arquivo app.js


//             Atividade IV: Importe o módulo para o documento principal

//Dúvidas nesse ponto - o doc principal seria mesmo app.js ou index.html?

