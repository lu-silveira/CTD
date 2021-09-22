/*
    Atividade I: Crie um controlador responsável por criar novos Alunos.
*/
const fs = require('fs');
// const arquivo = fs.readFileSync(__dirname + '/aluno.json', 'utf-8');
// const

function Aluno(nomeAluno, sobrenomeAluno) {
    var nome = nomeAluno;
    var sobrenome = sobrenomeAluno;

    this.getNome = function () {
        return nome;
    }

    this.getSobrenome = function () {
        return sobrenome;
    }

    this.getNomeCompleto = function() {
        return `${nome} ${sobrenome}`;
    }
}
    /*
    O controlador deve ser capaz de:
    (  ) Cadastrar um novo aluno com nome, sobrenome.
    (  ) Validar se o nome e sobrenome do aluno é uma string e/ou não esta vazio.
    (  ) Caso passe na validação:
        (  ) Salvar o cadastro em um arquivo json.
    (  ) Caso o contrário:
        (  ) Recusar o Cadastro com uma mensagem de erro.
*/