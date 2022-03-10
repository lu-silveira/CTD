let pontoUsuario = 0
let pontoMaquina = 0
let pontoUniverso = 0
let maoUsuario = 0
	
	for (i = 0; i < 3; i++) {
	    for (e = 0; e < 2; e++) {
	        maoUsuario = prompt("Digite um número entre (1) pedra, (2) papel e (3) tesoura")
	        maoUsuario == "1"||maoUsuario == "2"||maoUsuario == "3"?e=2:e=0
	    }
	    let nomeMao
	    let nomeMaq
	    switch (maoUsuario) {
	        case "1":
	            nomeMao = "pedra"
	            break;
	        case "2":
	            nomeMao = "papel"
	            break;
	        case "3":
	            nomeMao = "tesoura"
	            break;
	    }
	let maoMaquina = parseInt(Math.random() * 3 + 1)
	    switch (maoMaquina) {
	        case 1:
	            nomeMaq = "pedra"
	            break;
	        case 2:
	            nomeMaq = "papel"
	            break;
	        case 3:
	            nomeMaq = "tesoura"
	            break;
	    }
	    alert("Você jogou " + nomeMao + " e a maquina " + nomeMaq)
	switch (maoUsuario) {
	        case "1":
	            if (maoMaquina == 1) {
	                pontoUniverso += 1
	            }
	            else if (maoMaquina == 2) {
	            }
	            else if (maoMaquina == 3) {
	                pontoUsuario += 1
	            }
	            break;
	        case "2":
	            if (maoMaquina == 2) {
	                pontoUniverso += 1
	            }
	            else if (maoMaquina == 3) {
	            }
	            else if (maoMaquina == 1) {
	                pontoUsuario += 1
	            }
	            break;
	
	        case "3":
	            if (maoMaquina == 3) {
	                pontoUniverso += 1
	            }
	            else if (maoMaquina == 1) {
	            }
	            else if (maoMaquina == 2) {
	                pontoUsuario += 1
	            }
	            break;
	    }
	}
	let res
	switch (pontoUniverso) {
	    case 3:
	        alert("Você não ganho e nem perdeu!")
	        break;
	    case 2:
	        res = pontoUsuario == 1 ? "Você ganhou o jogo!" : "Você perdeu o jogo!";
	        alert(res)
	        break;
	    case 1:
	        res = pontoUsuario == 2 ? "Você ganhou o jogo!" : pontoUsuario == 1 ? "Você não ganho e nem perdeu!" : "Você perdeu o jogo!";;
	        alert(res)
	        break;
	    case 0:
	        res = pontoUsuario > 1 ? "Você ganhou o jogo!" : "Você perdeu o jogo!";
	        alert(res)
	        break;
	}
