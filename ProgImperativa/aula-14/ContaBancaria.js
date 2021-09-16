// Atividade I: Converta o documento html para javascript
//             Atividade II: Converta objeto literal em função construtora

function ContaBancaria (deposito, saque) {

    this.nome = "NomeCompletoDoUsuario",
    this.numeroDaAgencia = "123",
    this.numeroDaConta = "98765",
    this.saldoAtual = 10.00,
    this.visualizarSaldo = 
        function () {
            return `Seu saldo atual é R$ ${this.saldoAtual}`;
        },
    this.deposito = function (deposito) {
        this.saldoAtual += Number(deposito);    
        return `Você depositou R$ ${deposito}. Seu saldo atual é R$ ${this.saldoAtual}`;
        },
    
    this.saque = function (saque) {
        if (this.saldoAtual > saque) {
            this.saldoAtual -= Number(saque);
        return `Você sacou R$ ${saque}. Seu saldo atual é R$ ${this.saldoAtual}`;
        } else {
            return `Saldo insuficiente. Seu saque de ${saque} não foi realizado. Saldo atual: ${this.saldoAtual}`
        }
    }
}


//             Atividade III: Divida o código em módulo

//Salvei arquivo como ContaBancaria.js e criei arquivo app.js
module.exports = ContaBancaria;

//             Atividade IV: Importe o módulo para o documento principal

//Dúvidas nesse ponto - o doc principal seria mesmo app.js ou index.html?

