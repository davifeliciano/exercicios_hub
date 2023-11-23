function A(x){
	const resB = B(x)
	const	resC = C()
}

function B(b){
	if(b == 1) return 1
	return b * B(b-1)
}

function C(){
	C();
	return 1
}

A(5)


function responder(){
	return 2 + 4 + 32 + 64 + 128 + 256;
}