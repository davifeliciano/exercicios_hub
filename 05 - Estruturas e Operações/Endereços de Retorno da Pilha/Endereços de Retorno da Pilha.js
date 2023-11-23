//Não alterar as funções A e B
function B(){
	console.log("Entrando em B")
	console.log("Saindo de B")
}

function A(){
	console.log("Eu sou a A que chama B")
	B()
	console.log("Saindo de A")
}

A()

function responder(){
	return 4 + 8 + 128 + 256;
}