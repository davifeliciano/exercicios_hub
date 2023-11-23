function corre(n){
	console.log("O fantasma está vindo!")
	let velocidadeAtual = velocidade(n)
	return velocidadeAtual;
}

function velocidade(n){
	return Math.floor(n)
}

function invocaFantasma(m){
	const fantasma = {cor: "branco", velocidade: velocidade(m)};
	return fantasma
}

function fechaPortaSozinha(){
 console.log("BLAAAM")
}

function novaExcecao(){
	throw new Error("O fantasma é muito veloz, vocês serão pegos!")
}

function casaDeTerror(novosVisitantes){
	if(novosVisitantes){
		fechaPortaSozinha(); 
	}
  const fantasma = invocaFantasma(10.4)
  const velocidade = corre(3.7)
	if(fantasma.velocidade > 2*velocidade){
		novaExcecao()
	}
	iniciarPerseguiçao()
}

casaDeTerror(true)

function responder(){
	return 2 + 16 + 128;
}