function ContaBancaria (deposito, saque) {

    this.nome = "NomeCompletoDoUsuario",
    this.numeroDaAgencia = "123",
    this.numeroDaConta = "98765",
    this.saldoAtual = 1000.00,
    this.visualizarSaldo = 
        function () {
            return `Seu saldo atual é R$ ${this.saldoAtual}`;
        },
    this.deposito = function (valor) {
        this.saldoAtual += valor;    
        return `Você depositou R$ ${valor}. Seu saldo atual é R$ ${this.saldoAtual}`;
        },
    
        this.saque = function (saque) {
        if (this.saldoAtual > saque) {
            this.saldoAtual -= saque;
        return `Você sacou R$ ${saque}. Seu saldo atual é R$ ${this.saldoAtual}`;
        } else {
            return `Saldo insuficiente. Seu saque de ${cash} não foi realizado. Saldo atual: ${this.saldoAtual}`
        }
    }
}