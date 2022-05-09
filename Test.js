
//multimplica dos numeros sin necesidad de multiplicar una funcion
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

//invierte el nombre de un array
function invertir(text){
    let invertido = "";
    for (letra of text){
        invertido = invertido+letra;
    }
    console.log(invertido);
}


//si es par se suma 1 punto, si es impar se suma 3 puntos, en caso sea 8 se suma 5 puntos
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

///Validar si el texto introducido es un numero, y generar un numero aleatorio en base a los dos numeros ingresados
function esNumero(num){
    return !isNaN(num)
}

function generarAleatorio(minimo,maximo)
{
    if(esNumero(minimo) && esNumero(maximo)){
        minimo = parseInt(minimo);
        maximo = parseInt(maximo);
        if(minimo>maximo){
            let aux = maximo;
            maximo = minimo;
            minimo = aux;
        }
        //var result= Math.floor(maximo - minimo); genera solo la resta
        var result= Math.floor(Math.random() * (maximo - minimo)) + minimo;
        
        console.log(result);
    }
    else{
        console.error("Los numeros son incorrectos");
    }
}


//DEVUELVE LA MEDIA DE UN ARRAY 
                //Suma los numeros de un array
                function sumaArray(array) {

                    let total = 0;

                    if (Array.isArray(array)) {

                        for (let i = 0; i < array.length; i++) {
                            const element = array[i];
                            if (esNumero(element)) {
                                total += element;
                            }
                        }
                    } else {
                        console.error("Debes pasar un array como parametro");
                    }
                    console.log(total);
                    return total;
                }

                // en base a  la fancion anterior, halla la media
                function mediaArray(array) {

                    let media = 0;

                    if (Array.isArray(array)) {

                        let suma = sumaArray(array);

                        media = suma / array.length;

                    } else {
                        console.error("Debes pasar un array como parametro");
                    }

                    console.log(media);

                }
                                    //my_numbers=[1,8,3,4,5]
                                     // mediaArray(my_numbers);


//COMPRUEBA SI EXISTE EL VALOR DENTRO DEL ARRAY
        function exists(array, elemento) {

            if (Array.isArray(array)) {

                for (let i = 0; i < array.length; i++) {
                    const element = array[i];

                    if (element == elemento) {
                        console.log("existe");
                        return true;
                    }
                }

            } else {
                console.error("Debes pasar un array como parametro");
            }
            console.log("no existe");
            return false;
        }
        //my_numbers=[1,8,3,4,5]
       // exists(my_numbers,9);




//DE UNA CADENA DE TEXTO, SABER SI ES PALINDORMO (SE LEE DE DERECHA A IZQUIERDA)
        function palindromo(texto){
            //split separa un texto en array (el '' es la condicion que quieres que separes) 
                //reverse cambia el orden de un array  
                    //join junta el texto del array previo invertido
            let invertido = texto.split('').reverse().join('');
                if(invertido === texto){
                        console.log('coinciden invertido');
                }else{
                console.log('no coinciden invertido');
            }
        }


my_numbers=[1,8,3,4,5]
palindromo('ottoS');