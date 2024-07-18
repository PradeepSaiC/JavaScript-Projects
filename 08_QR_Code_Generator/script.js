const inputElem=document.querySelector("#input");
const btnElem=document.querySelector("#submit");
const imgElem=document.querySelector("img");
btnElem.addEventListener("click",()=>{
    if(!inputElem.value){
        return alert("Enter text to genrate QR Code");
    }
    const URL=  `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputElem.value}`;
    imgElem.src=URL;
})