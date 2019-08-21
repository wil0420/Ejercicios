$( "#enviar" ).click(function() {
       let valor =  $("#numero").val();
        if(valor == ""){
            $(".alert").text("Ingrese un valor").addClass("alert-primary")
        }else{
            $(".alert").empty().removeClass("alert-primary")
            calcular(valor)
        }
  });

  function calcular(valor){
        $(".alert").empty().removeClass("alert-primary")
        if(valor % 2 === 0 || valor % 3 === 0){
            $(".alert").text("El número "+ valor +" No es primo").addClass("alert-primary")
        }else{
            $(".alert").text("El número "+ valor + " Es primo").addClass("alert-primary")
        }
  }