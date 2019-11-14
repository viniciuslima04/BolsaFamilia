



const campocpf = document.querySelector("#cpf");


campocpf.onkeypress = function(){
	MaskJS(campocpf).mascararPadrao("999.999.999-99");
} 