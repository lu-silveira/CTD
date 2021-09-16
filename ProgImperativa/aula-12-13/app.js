var listaDeAlunos = [
    {
        nome: 'Ivan',
        notas: [10, 8.1, 6.6, 7],
    },
    {
        nome: 'Salomão',
        notas: [5, 6.3, 6.8, 10]
    },
    {
        nome: 'Angela',
        notas: [9, 9.6, 7.9, 8]
    },
    {
        nome: 'Ivo',
        notas: [6, 6, 3, 6.5]
    },
    {
        nome: 'Dayane',
        notas: [3, 6, 7.5, 8.1]
    },
    {
        nome: 'Willian',
        notas: [3, 2, 5, 7.3]
    },
    {
        nome: 'Ana',
        notas: [5, 4, 6, 3.5]
    },
    {
        nome: 'Edu',
        notas: [6, 3, 6, 6]
    }, 
    {
        nome: 'Paulo',
        notas: [10, 9.3, 9, 0]
    },
    {
        nome: 'Junior',
        notas: [7, 6.5, 7, 6.3]
    },
    {
        nome: 'Caio',
        notas: [7, 0, 7.5, 8]
    }
];

function listaNotas (nota, indice) {
   
    console.log(`${indice+=1} Bimestre: ${nota}`);
}

function listaDaSala(aluno) {
    console.log(`Nome: ${aluno.nome}`);
    aluno.notas.map(listaNotas);
    console.log("#######");
}


var todosAlunos = listaDeAlunos.map(listaDaSala);
var todasNotas = todosAlunos.map(listaNotas);

console.log('Lista de Alunos:  ', todosAlunos, todasNotas);


var resultadoMedia = listaDeAlunos.map(listaNotas)

function mediaAluno(total, nota) {
        console.log(total + nota);
}

function listarNotas (aluno) {
    return aluno.notas.reduce(mediaAluno);
}



function zerados(aluno) {
 var notaZero = aluno.notas.some(0);

 if (notaZero) {
     console.log(`Alunos com nota zero: Nome: ${aluno.nome}`);
     console.log("############");
 }
}

function notaDeCorte(nota) {
    return nota == 0;
}

function alunosIo () {

}