let bodyElem=document.querySelector("body");
let buttonElem=document.querySelector("button");

// Random Hexadecimal number generator 
function randomHex(){
    let charString="0123456789ABCDEF";
    let val='#';
    for(let i=0; i<6; i++){
        val = val + charString[Math.floor(Math.random()*16)];
    }
    return val;
}
// color changer
function changeColor(){
    bodyElem.style.backgroundColor=randomHex();
}

// adding event listener 
buttonElem.addEventListener("click",changeColor);