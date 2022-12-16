// cambia lo siguiente por if, else y else if

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}


if(tipoDeSuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
else if(tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if(tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else{
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}


//ahora lo mismo usando solo if


if(tipoDeSuscripcion){
    if(tipoDeSuscripcion == "Free"){
        console.log("Solo puedes tomar los cursos gratis");
      }
    if(tipoDeSuscripcion == "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }
    if(tipoDeSuscripcion == "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    } 
    if(tipoDeSuscripcion == "ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
    console.warn("nada, bro")
}

//Forma correcta:

function soloConIf(tipoDeSuscripcion){
    if(tipoDeSuscripcion == "Free"){
        console.log("Solo puedes tomar los cursos gratis");
        return;
      }
    if(tipoDeSuscripcion == "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
    if(tipoDeSuscripcion == "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    } 
    if(tipoDeSuscripcion == "ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }
    console.warn("nada, bro")
}

//con objeto
let suscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}


if(suscripciones([tipoDeSuscripcion])){
    console.log(suscripciones[tipoDeSuscripcion])
}


let clave = Object.keys(suscripciones);

if(clave.includes(tipoDeSuscripcion)){
    console.log(suscripciones[tipoDeSuscripcion])
}
//Lo mismo pero sin objet.keys (que no es tan necesario)

//con array

let arrayTipoSuscripcion =["Free","Basic", "Expert", "ExpertPlus"]

let arraySuscripciones =[
    "Solo puedes tomar los cursos gratis", "Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Puedes tomar casi todos los cursos de Platzi durante un año",
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
]

let valor = arrayTipoSuscripcion.indexOf(tipoDeSuscripcion);

if(valor){
    console.log(arraySuscripciones[valor])
}


//Arrays y objetos


let objetArraySuscripciones = [
    {"free": "Solo puedes tomar los cursos gratis"},
    {"Basic": "Puedes tomar casi todos los cursos de Platzi durante un mes" },
    {"Expert": "Puedes tomar casi todos los cursos de Platzi durante un año" },
    {"ExpertPlus": "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"}
]
let clave2 = Object.keys(objetArraySuscripciones)

if(true){
    let suscripcion = objetArraySuscripciones.find(
        function(element){
            return element[tipoDeSuscripcion]
        }
    )
    console.log(suscripcion[tipoDeSuscripcion])
}