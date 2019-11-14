
function buscaMes(){ 

  var mesAno;
  

  var cpfMes = document.getElementById("cpfMes");

   if (cpfMes.options[cpfMes.selectedIndex].value =="Janeiro")
    {
       
       mesAno = 201901;
        return mesAno;
       
    }

    if (cpfMes.options[cpfMes.selectedIndex].value =="Fevereiro")
    {
       
        mesAno = 201902;
        return mesAno;
       
    }

    if (cpfMese.options[cpfMes.selectedIndex].value =="Março")
    {
       
       mesAno = 201903;
       return mesAno;
       
    }

    if (cpfMes.options[cpfMes.selectedIndex].value =="")
    {
       
       alert ("Por favor selecione o mês");
       
       
    }

    

}
 



function buscarPorCpf(){


    const cpf = document.getElementById("cpf").value;
    const mesAno = buscaMes();
    const url = "http://www.transparencia.gov.br/api-de-dados/bolsa-familia-disponivel-por-cpf-ou-nis?codigo="+cpf+"&anoMesReferencia="+mesAno+"&anoMesCompetencia="+mesAno+"&pagina=1";
  

    var ajax = createCORSRequest('GET', url);
    if (!ajax) {
      throw new Error('CORS not supported');
    }
  
  

    ajax.onreadystatechange = function () {

         //if (this.readyState < 4) {
           // var load = document.getElementById("load");
            //load.style.display = "inline-block";

         //}
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            let resposta = JSON.parse(this.responseText)[0];
            const valor = resposta.valor;
            const nome = resposta.titularBolsaFamilia.nome;
            const cpf = resposta.titularBolsaFamilia.cpfFormatado;
            
             //const estado = resposta.municipio.uf.nome;
            document.getElementById("pcpf").innerHTML = cpf;
            document.getElementById("pessoas").innerHTML = nome;
            document.getElementById("pvalor").innerHTML = valor;
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

