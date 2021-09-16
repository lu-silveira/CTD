
listarTodosOsFilmes();

var listaDePerguntasERespostas = [
    {
        enunciadoDaQuestao: 'Em que ano acontecerá a próxima Copa do Mundo?',
        resposta: '2022'
    },
    {
        enunciadoDaQuestao: 'Qual a maior montanha do mundo?',
        resposta: 'Monte Everest'
    },
    {
        enunciadoDaQuestao: 'Qual o maior planeta do sistema solar?',
        resposta: 'Júpiter'
    },
    {
        enunciadoDaQuestao: 'Quanto tempo a terra leva para dar uma volta completa em torno dela mesma?',
        resposta: '24h'
    },
    {
        enunciadoDaQuestao: 'Qual o nome do primeiro astronauta a viajar no espaço?',
        resposta: 'Yuri Gagarin'
    }
];

function iniciarQuiz() {
    for (let i = 0; i <= listaDePerguntasERespostas.length; i++)
    var enunciadoDaQuestao = listaDePerguntasERespostas[i].enunciadoDaQuestao;
    var respostaDoUsuario = prompt(enunciadoDaQuestao);
    var respostaCorreta = listaDePerguntasERespostas[i].resposta;

    if(respostaDoUsuario.toLowerCase() == respostaCorreta.toLowerCase()) {
        alert('Parabéns, você acertou.');
        iniciarQuiz();
    } else {
        // A repetição deve ser encerrada se o usuário errar. 
        alert('Você errou! Por favor, comece novamente.');
    }
    // Por fim, quando todas as questões forem respondidas, o usuário de receber a mensagem 'Parabéns, você acertou doas as questões.'
}

iniciarQuiz();