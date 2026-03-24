let display = document.querySelector("#display");
function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    } catch{
        display.value = "Error";
    }
}

function toRadians(value){
    return value * Math.PI / 180;
}

function sinf(){
    display.value = Math.sin(toRadians(Number(display.value))).toFixed(4);
}

function cosf(){
    display.value = Math.cos(toRadians(Number(display.value))).toFixed(4);
}

function tanf(){
    display.value = Math.tan(toRadians(Number(display.value))).toFixed(4);
}

function sqrt(){
    display.value = Math.sqrt(Number(display.value));
}