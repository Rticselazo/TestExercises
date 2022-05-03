



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

function find_total(Array){
        suma=0;
    for(i=0; i< Array.length; i++ ){
        if(Array[i] == 8 ){
            console.log("el numero es 8");
            suma=suma+5;
        }else if(Array[i]%2==0){
            console.log("el numero es par");
            suma=suma+1;
        }
        else{
            console.log("el numero es impar");  
            suma=suma+3;
        }
    }
    console.log(suma);
}

my_numbers=[1,8,3,4,5]
find_total(my_numbers)