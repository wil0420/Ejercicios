$("#enviar" ).click(function() {
    let valor =  $("#numero").val();
     if(valor == ""){
         $(".alert").text("Ingrese un valor").addClass("alert-primary")
     }else{
         $(".alert").empty().removeClass("alert-primary")
         let respuesta = calcular(valor)
         ver(valor)

         if(respuesta == 1){
            $(".alert").text("El número "+ valor + " Es primo").addClass("alert-primary")
         }else{
            $(".alert").text("El número "+ valor +" No es primo").addClass("alert-primary")
         }
     }
});
