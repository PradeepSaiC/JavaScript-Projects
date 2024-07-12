let scoreElem=document.querySelector(".score");
let plusElem=document.querySelector(".plus");
let minusElem=document.querySelector(".minus");
let resetElem=document.querySelector(".reset");

// initializing count variable with zero at beginning
let count=0;

// add event listener to plus button 
plusElem.addEventListener("click",()=>{
    count=count+1;
    scoreElem.textContent=count;
});
// add event listener to minus button 
minusElem.addEventListener("click",()=>{
    count=count-1;
    scoreElem.textContent=count;
});
// add event listener to reset button 
resetElem.addEventListener("click",()=>{
    count=0;
    scoreElem.textContent=count;
});