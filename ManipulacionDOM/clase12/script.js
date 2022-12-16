console.log(
// //Accedienod a los elementos HTML
// let h1=  document.querySelector('h1');
// let pid = document.getElementById("pid");
// let pclass = document.querySelector(".pclass");
// let input = document.querySelector("input");
// //Creando img:
// const img = document.createElement("img");
// img.setAttribute("src", "https://img.freepik.com/vector-gratis/concepto-gesto-rock-monocromo-vintage_225004-1211.jpg?w=2000")
// img.setAttribute("width", "60px")
// pclass.appendChild(img);


// //Modificando texto 
// h1.innerHTML = "hola <br> adiós"
// pid.innerText = "Hola mi so" 


// //Accediendo y cambiando atributos
// console.log(pclass.getAttribute("class"))
// pclass.setAttribute("id", "arrozConPollo")


// //Añadiendo y eliminando clases:

// pclass.classList.add("hola")
// pclass.classList.remove("pclass");)
)


const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2")
const btn = document.querySelector("#btnCalcular")
const pResult = document.querySelector("#result")

function onClickBtn(){
    let suma =Number(input1.value) + Number(input2.value)

    pResult.innerText = "Resultado es " + suma
}









