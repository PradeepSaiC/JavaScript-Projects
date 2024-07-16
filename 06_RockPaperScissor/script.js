let optionElems=document.querySelectorAll(".option");
let userResElem=document.querySelector(".user-result");
let computerResElem=document.querySelector(".computer-result");
let winnerElem=document.querySelector(".winner");

let userScore=0;
let computerScore=0;
let userChoice;
let computerChoice;

function generateRandomNum(){
    return Math.floor(Math.random()*2);
}

function generateChoices(){
   userChoice=this.getAttribute("id");
   makeComputerChoice();
}

function checkWinner(){
    if(userChoice === "r" && computerChoice === "p"){
        computerScore=computerScore+1;
        computerResElem.textContent=computerScore;
    }
    else if(userChoice ==="p" && computerChoice === "r"){
        userScore = userScore +1;
        userResElem.textContent=userScore;
    }
    else if(userChoice === "p" && computerChoice === "s"){
        computerScore = computerScore+1;
        computerResElem.textContent=computerScore;
    }
    else if(userChoice === "s" && computerChoice === "p"){
        userScore = userScore + 1;
        userResElem.textContent=userScore;
    }
    else if(userChoice === "r" && computerChoice === "s"){
        userScore = userScore + 1;
        userResElem.textContent=userScore;
    }
    else {
        computerScore = computerScore +1;
        computerResElem.textContent=computerScore;
    }

    if(userScore > computerScore){
        winnerElem.textContent="User";
    }
    else if(userScore < computerScore){
        winnerElem.textContent="Computer";
    }
    else{
        winnerElem.textContent="Draw";
    }
}

function resetStyleAndCheckForWinner(){
    setTimeout(()=>{
        optionElems[0].style.backgroundColor="transparent";
        optionElems[1].style.backgroundColor="transparent";
        optionElems[2].style.backgroundColor="transparent";
        checkWinner();
    },500);
}

function makeComputerChoice(){
    if(userChoice === "r"){
        let choice=generateRandomNum();
        computerChoice = ["p","s"][choice];
        if (computerChoice === "p"){
            optionElems[1].style.backgroundColor="#E8290B";
        }
        else{
            optionElems[2].style.backgroundColor="#E8290B";
        }
        resetStyleAndCheckForWinner();
    }
    else if(userChoice === "p"){
        let choice=generateRandomNum();
        computerChoice = ["r","s"][choice];
        if (computerChoice === "r"){
            optionElems[0].style.backgroundColor="#E8290B";
        }
        else{
            optionElems[2].style.backgroundColor="#E8290B";
        }
        resetStyleAndCheckForWinner();
    }
    else{
        let choice=generateRandomNum();
        computerChoice = ["r",'p'][choice];
        if (computerChoice === "r"){
            optionElems[0].style.backgroundColor="#E8290B";
        }
        else{
            optionElems[1].style.backgroundColor="#E8290B";
        }
        resetStyleAndCheckForWinner();
    }
}

optionElems.forEach((elem)=>{
    elem.addEventListener("click",generateChoices);
})