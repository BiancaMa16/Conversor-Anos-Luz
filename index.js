function coverterParaAnosLuz() {
    var valorElemento = document.getElementById("valorAl");
    var valorAl = valorElemento.value;
    var valorEmAl = valorAl;
    var valorEmKm = valorEmAl * 9.461e12;
  
    console.log(valorEmAl);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = valorEmKm;
  
    elementoValorConvertido.innerHTML = valorConvertido + " Km";
  }  