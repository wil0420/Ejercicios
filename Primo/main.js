function calcular(valor){
    if(valor == 2){
        return 1
    }else{
        for(var i = 2; i < valor; i++){
            if(valor % i !== 0){
                return 1
                break
            }else{
                return 0
                break
            }
        }

    }

}
  module.exports = calcular;