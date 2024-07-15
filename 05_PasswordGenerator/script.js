let resultElem=document.querySelector(".result");
let lengthElem=document.querySelector("#length");
let upperCaseElem=document.querySelector("#uppercase");
let lowerCaseElem=document.querySelector("#lowercase");
let numsElem=document.querySelector("#numbers");
let symbElem=document.querySelector("#symbols");
let generateBtnElem=document.querySelector(".generate-btn");
let clipboardElem=document.querySelector("#clipboard");

const randomGeneratorFunc={
    lower:function getRandomLower(){
        let lowerLetters = "abcdefghijklmnopqrstuvwxyz";
        return lowerLetters[Math.floor(Math.random()*26)];
    },
    upper:function getRandomUpper(){
        let upperLetters = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
        return upperLetters[Math.floor(Math.random()*26)];
    },
    number:function getRandomNumber(){
        let numbers = "0123456789";
        return numbers[Math.floor(Math.random()*10)];
    },
    symbol:function getRandomSymbol(){
        let symbols = "!@#$%^&*()_+}{?/>.<,\\'";
        return symbols[Math.floor(Math.random()*21)];
    },
};


function generateRandomPassword(lower,upper,number,symbol,length){
    let password=[];
    for(let i=0; i<length ;i++){
        if(lower){
            password.push(randomGeneratorFunc.lower());
        }
        if(upper){
            password.push(randomGeneratorFunc.upper());
        }
        if(number){
            password.push(randomGeneratorFunc.number());
        }
        if(symbol){
            password.push(randomGeneratorFunc.symbol());
        }
    }
    resultElem.textContent=password.join("").substring(0,length);
}
generateBtnElem.addEventListener("click",()=>{
    generateRandomPassword(
        lowerCaseElem.checked,
        upperCaseElem.checked,
        numsElem.checked,
        symbElem.checked,
        lengthElem.value
    );
});

clipboardElem.addEventListener("click",()=>{
    if(resultElem.textContent){
        navigator.clipboard.writeText(result.textContent);
    }
});