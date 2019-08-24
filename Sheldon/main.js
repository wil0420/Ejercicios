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
var res1 = 0;

for(let i =1; i < numerosPrimos.length; i++ ){
    if(numero == numerosPrimos[i]){
        let posicion = i+1;
        var arreglo = (""+numero + "").split(''); 
        var multi = arreglo[0] * arreglo[1];
        if(multi == posicion){
             var res1 = 1;
        }
        break
    }else{
        
    }
}

if(res1 != 0){
    return 1
}else{
    return 0
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