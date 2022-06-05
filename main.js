let nameArray = [];
let moneyArray = [];

function addArray(){
    let nombre = document.getElementById("nameField").value;
    let gasto = document.getElementById("numberField").value;
    if(nombre == 0 || gasto == 0){
        alert("Debe ingresar un valor!");
    }else{
        nameArray.push(nombre);
        moneyArray.push(gasto);
        printArray();
        nombre = "";
        gasto = "";
    }
}

function printArray(){
    let printArea = document.getElementById("printedArea");
    let resultPrintArea = document.getElementById("resultPrint");
    resultPrintArea.innerHTML = "";
    printArea.innerHTML = "";
    let index = 0;
    for(let arrayObj of nameArray){
        let obj = document.createElement("li");
        obj.innerHTML = '<li class="list-group-item">'+ arrayObj + ': $' + moneyArray[index] +'</li>';
        printArea.appendChild(obj);
        index += 1;
    }
    let calcResult = document.createElement("div");
    calcResult.innerHTML = '<div class="card text-center"><div class="card-body"><h5 class="card-title">Total: '+ calcArray(moneyArray) +'</h5><h5 class="card-title">Each: '+ parseInt(calcArray(moneyArray)/nameArray.length)+'</h5></div></div>'
    resultPrintArea.appendChild(calcResult);
}

function calcArray(array){
    let resultado = 0;
    for(let obj of array){
        resultado += parseInt(obj);
    }
    return resultado;
}