var c = 100;
var j = 2;
var numerosPrimos = [];

for (; j < c; j++) {

  if (calcular(j)) {
    numerosPrimos.push(j);
  }
  
}

console.log(numerosPrimos);

function ver(numero){

for(let i =1; i < numerosPrimos.length; i++ ){
    if(numero == numerosPrimos[i]){
        let posicion = i+1;
        var arreglo = (""+numero + "").split(''); 
        var multi = arreglo[0] * arreglo[1];
        if(multi == posicion){
            console.log("SI es")
        }
        break
    }else{
        console.log("Noo es")
    }
}


}


function calcular(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}