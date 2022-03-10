const welcome = "Hello, World! :D"
console.log(welcome)

const numbers = [9, 15, 24, 32, 70]

let resultado = 0;

for(let number of numbers) {

    resultado = number + resultado;
    console.log(`O resultado é ${number}`)

}
