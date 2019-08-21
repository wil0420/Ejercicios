function calcular(valor){    
    if(valor % 2 === 0 || valor % 3 === 0){
        return 0
    }else{
        return 1
    }
}
  module.exports = calcular;