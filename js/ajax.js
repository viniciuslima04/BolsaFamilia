
function buscaCidade() {

  var codCidade;


  var seleccidade = document.getElementById("selecidade");




  if (seleccidade.options[seleccidade.selectedIndex].value == "") {

    alert("Por favor selecione a cidade");


  } else {
    return seleccidade.options[seleccidade.selectedIndex].value;
  }



}

function buscaMesCidade() {

  var mesAno;


  var seleMescidade = document.getElementById("seleMescidade");


  if (seleMescidade.options[seleMescidade.selectedIndex].value == "") {

    alert("Por favor selecione o mês");


  }
  else{

    return seleMescidade.options[seleMescidade.selectedIndex].value;
  }



}





function buscarPorCidade() {


  const cod = buscaCidade();
  const mesAno = buscaMesCidade();
  const url = "http://www.transparencia.gov.br/api-de-dados/bolsa-familia-por-municipio?mesAno=" + mesAno + "&codigoIbge=" + cod + "&pagina=1";


  var ajax = createCORSRequest('GET', url);
  if (!ajax) {
    throw new Error('CORS not supported');
  }



  ajax.onreadystatechange = function () {

    //if (this.readyState < 4) {
    // var load = document.getElementById("load");
    //load.style.display = "inline-block";

    //}
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      let resposta = JSON.parse(this.responseText)[0];
      const valor = resposta.valor;
      const quanti = resposta.quantidadeBeneficiados;
      const cidade = resposta.municipio.nomeIBGE;
      const estado = resposta.municipio.uf.nome;
      document.getElementById("valor").innerHTML = valor.toLocaleString('pt-BR');
      document.getElementById("tpessoas").innerHTML = quanti;
      document.getElementById("valor2").innerHTML = cidade + "-" + estado;
    }
  };

  ajax.send();



}

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

