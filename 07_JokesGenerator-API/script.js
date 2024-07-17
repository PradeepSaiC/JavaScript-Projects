let jokeElem=document.querySelector(".joke");
let btnElem=document.querySelector(".btn");

const fetchNewJoke = async () => {
    const URL ="https://official-joke-api.appspot.com/random_joke";
    try{
        let data=await fetch(URL);
        let res=await data.json();
        return res;
    }
    catch(e){
        console.log("Seems like there's no internet connection ,check it and give a try");
    }


}


btnElem.addEventListener("click",async () => {
    btnElem.textContent="Fetching..."
    let joke=await fetchNewJoke();
    if(joke){
        jokeElem.innerHTML=`<span>${joke.setup} <br/>${joke.punchline}</span>`
    }
    btnElem.textContent="Generate Another Joke";
})