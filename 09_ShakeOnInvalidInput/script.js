

function validateInput(e) {
    let textField = document.getElementById("random-text");
    let text = textField.value.trim();
    const errMassage = document.getElementById("error-message");
    if(text === ''){
        textField.classList.add("shake");
        errMassage.style.visibility ="visible"

        setTimeout(() => {
            textField.classList.remove("shake");
            errMassage.style.visibility = "hidden"
        },2000);
    }
    else{
        alert("Valid Input")
    }
}