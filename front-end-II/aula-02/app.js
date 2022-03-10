//objeto js --> quase um conjunto de variáveis

let user = {

    name: 'Lu Silveira',
    age: 32,
    birthDate: '01/01/2021'

}

console.log(user)

for (let propriedade in user) {
    console.log(propriedade)
}

let = parseInt(prompt('1 - Papel; 2 - Tesoura; 3 - Pedra'))

let botChoice = parseInt( Math.random()*3+1 )

if (userChoice === 1) {
    if (escolhaBot === 1)
    alert('empate')
}
    if (botChoice === 2) {
        alert('user ganhou')
    }

    if (botChoice === 3) {
        alert('User ganhou')
    }

// if (userChoice === 3) {

//     if (botChoice === 2) {
    
//         alert('Você ganhou')
//     }
// }

// console.log(userChoice)

