//Funcion que imprime primer elemento

let lista1 = [1,2,3,4]

function imprimirPrimerElemento(lista){
    console.log("el primer elemento es: "+ lista[0]);
}

imprimirPrimerElemento(lista1);


// Imprimir todos los elementos uno por uno

let lista2 = [1,2,3,5]

function imprimirUnoPorUno(lista){
    while(lista.length > 0){
        let valor = lista.shift();
        console.log("-"+ valor)
    }
}

//for 

function imprimirUnoPorUnoFor(lista){
    for(let i= 0; i < lista.length; i++){
        console.log(lista[i])
    }
}

imprimirUnoPorUno(lista2);

//imprimir elementos de un objeto uno por uno

let objeto = {value:"Hola", value2:"adios"};

function imprimirObjeto(objeto){
    for(element in objeto){
        console.log(element)
    }
}
imprimirObjeto(objeto)

let objectToArray = Object.value(objeto)