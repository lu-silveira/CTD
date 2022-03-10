let numeros = document.querySelectorAll('#numeros li')

//usou loop para interagir com cada instancia da lista

for(let i = 0; i < numeros.length; i++) {
    // <li>1</li> --> inner text vai pegar apenas esse numero
    numeros[i].innerText;
}