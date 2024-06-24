//C to F --> (C*9/5)+32
//F to C --> (32F-32)*5/9

const tempValue = document.getElementById("tempInput");
const toC = document.getElementById("ftoc");
const toF = document.getElementById("ctof");
const convButton = document.getElementById("convButton");
const ans = document.getElementById("Answer");

function toCelsius(temp){
    temp = tempValue.value;
    return (temp*32-32)*5/9;
}

function toFahrenheit(temp){
    temp = tempValue.value;
    return (temp*9/5)+32;
}

function conv(){

    if(tempValue.value == ""){
        ans.textContent = "Please provide the temperature!";
    }

    else if(toC.checked){
        ans.textContent = String(toCelsius(tempValue.value).toFixed(1)) + "°C";
    }
    else if(toF.checked){
        ans.textContent = String(toFahrenheit(tempValue.value).toFixed(1)) + "°F";
    }

    else{
        ans.textContent = "Please select one of the options!";
    }
}