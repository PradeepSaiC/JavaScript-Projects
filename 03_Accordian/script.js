let container=document.querySelector(".container");
let faqContainer=document.createElement("div");
let headingElem=document.createElement("h1");
faqContainer.setAttribute("class","faq-container")
container.appendChild(faqContainer);
// adding headiline 
headingElem.innerText="Accordion";
headingElem.setAttribute("class","heading");
faqContainer.appendChild(headingElem);

// creating array of object to store id , question ,answer
let data=[
    {
        question:"What is Your Name?",
        answer:"My name is Sai Pradeep",
    },
    {
        question:"What are your interests?",
        answer:"I'm very much interested in coding,cricket and travelling.",
    },
    {
        question:"How skiiled you are?",
        answer:"I'm very well skilled in front-end tools like html,css,tailwind and javascript.",
    },
];


data.forEach((elem)=>{
    // crating faq div 
    let faqDiv=document.createElement("div");
    faqDiv.setAttribute("class","faq");
    faqContainer.appendChild(faqDiv);
    
    //creating inside elements of faq div
    let quesDiv=document.createElement("div");
    quesDiv.setAttribute("class","faq-question");
    faqDiv.appendChild(quesDiv);

    let h3Elem=document.createElement("h3");
    quesDiv.appendChild(h3Elem);

    let btnElem=document.createElement("button");
    quesDiv.appendChild(btnElem);

    let pElem=document.createElement("p");
    pElem.setAttribute("class","hidden ans");
    faqDiv.appendChild(pElem);
    h3Elem.textContent=elem.question;
    btnElem.textContent="+";
    pElem.textContent=elem.answer;
});

// function to show content 
function showContent(){
    let pElem=this.parentElement.nextElementSibling;
    pElem.classList.toggle("hidden");
}

// select all buttons 
let allBtns=document.querySelectorAll("button");
allBtns.forEach((btn)=>{
    btn.addEventListener("click",showContent);
})