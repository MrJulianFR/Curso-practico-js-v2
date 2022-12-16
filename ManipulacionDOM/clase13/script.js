const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2")
const btn = document.querySelector("#btnCalcular")
const pResult = document.querySelector("#result")



btn.addEventListener('click', sumarInput);

function sumarInput(event){
    event.preventDefault()
    let numberOne = input1.value;
    let numberTwo = input2.value;
    let result = Number(numberOne) + Number(numberTwo)
    console.log("sisas")
    pResult.innerText =  result;

    console.log("Se perdio")

}