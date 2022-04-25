



function getBiggest(def){
    var Order = 1;
    if(def[0] === "-"){
        Order = -1;
        def = def.subsrt[1];
    }
 
    return function (a,b){
        if(Order == -1){
            return b[def].localeCompare(a[property]);
        }else{
            return a[def].localeCompare(b[property]);
        }
    }


}


function multiplicar(a,b){
    resultado = 0;
        for(i=0;i<b;i++){
            if(Math.sign(a)==1 && Math.sign(b)==1){
                resultado = resultado +a;
            }
            else{
                resultado = resultado -a;
            }

       
        }
console.log(resultado);
}


function invertir(text){
    let invertido = "";
    for (letra of text){
        invertido = invertido+letra;
    }
    console.log(invertido);
}

multiplicar(4,-3);