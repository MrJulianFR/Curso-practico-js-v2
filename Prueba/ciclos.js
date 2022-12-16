// cambiar a while

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let numero = 0;
while(numero< 5){
    console.log("el valor de i es: "+ numero)
    numero++;
}

let numero2 = 10;
while(numero2 >= 2){
    console.log("El valor de i es: " + numero2);
    numero2--;

}


// Suma, si el usuario responde mal volvemos a empezar

let valor =1;

while(valor == 1){
    let resultadoSuma =Number(prompt("Cuánto es 2+2? "));
    if(resultadoSuma != 4){
        alert("vuelve a intentarlo")
        valor = 1;
    }
    else{
        alert("felicidades, acertaste")
        valor= 0;
    }
}
//otra mas corta:

let value= 0;

while(value != 4){
    let resultadoSuma =Number(prompt("Cuánto es 2+2? "));
    value = resultadoSuma;

}
// Otra forma: 

function suma(){
    let resultadoSuma =Number(prompt("Cuánto es 2+2? "));
    if(resultadoSuma != 4){
        alert("vuelve a intentarlo")
        suma()
    }
    else{
        alert("felicidades, acertaste!")
    }

}


let elementos = [
    {name: "bicicleta"},
    {name: "carro"},
    {name: "moto"}
]

let bicicleta = elementos.find(
    function(element){
        return element.name == "bicicleta";

    }
)

