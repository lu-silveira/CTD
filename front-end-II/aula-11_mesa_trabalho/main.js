// Louise Nascimento
// Luciana Silveira
// Maiara Martinelli

let botaoCriarReferencia = document.querySelector('#botaoCriar');
let inputNomeReferencia = document.querySelector('#nome');
let inputSobrenomeReferencia = document.querySelector('#sobrenome')
let outputs = document.querySelector('#outputs');


botaoCriarReferencia.addEventListener('click', function(event){
  
    event.preventDefault()

    let nome = inputNomeReferencia.value;
    let sobrenome = inputSobrenomeReferencia.value;
    // nomeSobrenome = nome.concat(' ' + sobrenome);
    
    let trimNome = `${nome.trim()} ${sobrenome.trim()}`
    let caixaNome = `${nome.toUpperCase()} ${sobrenome.toUpperCase()}`
    let minusNome = `${nome.toLowerCase()} ${sobrenome.toLowerCase()}`
    
    let nomeSobrenome = `${nome.concat(sobrenome)}`
    let teenNome = nomeSobrenome.replaceAll('a', '@').replaceAll('e', '3');

    outputs.innerHTML += `<p>${trimNome}</p>`
    outputs.innerHTML += `<p>${caixaNome}</p>`
    outputs.innerHTML += `<p>${minusNome}</p>`
    outputs.innerHTML += `<p>${nomeSobrenome}</p>`
    outputs.innerHTML += `<p>${teenNome}</p>`
   

})



