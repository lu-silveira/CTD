let escolhaUsuario = parseInt(prompt('1- Papel, 2- Tesoura, 3- Pedra'))
let escolhaBot = parseInt( Math.random()*3+1 )


if (escolhaUsuario === escolhaBot) {
    alert ('Empatou, Nobody Wins')
}

else
switch(escolhaUsuario === 1) {

    case(escolhaBot === 1):

        alert('empatou')


    case (escolhaBot === 2): 

        alert('o bot ganhou')


    case(escolhaBot === 3):

        alert('o usuário ganhou')

}

if(escolhaUsuario === 2) {

    if(escolhaBot === 1) {

        alert('o usuário ganhou')

    }

    if(escolhaBot === 2) {

        alert('empatou')

    }

    if(escolhaBot === 3) {

        alert('o bot ganhou')

    }

}

if(escolhaUsuario === 3) {

    if(escolhaBot === 1) {

        alert('o bot ganhou')

    }

    if(escolhaBot === 2) {

        alert('o usuário ganhou')

    }

    if(escolhaBot === 3) {

        alert('o usuário ganhou')

    }

}

console.log('Jogada do Usuário '+escolhaUsuario)
console.log('Jogada do Bot '+escolhaBot)
