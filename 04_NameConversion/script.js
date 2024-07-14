// camel case 
String.prototype.toCamelCase=function(){
    let camelCase=[];
    let isWhiteSpace=false;
    let inputString=this.replaceAll("/\s+/g"," ").trim().toLowerCase();
    for(let char of inputString){
        if(char === " "){
            isWhiteSpace=true;
        }
        else if(isWhiteSpace){
            camelCase.push(char.toUpperCase());
            isWhiteSpace=false;
        }
        else{
            camelCase.push(char);
        }
    }
    return camelCase.join("");
}

// pascal case 
String.prototype.toPascalCase=function(){
    let pascalCase=[];
    let isWhiteSpace=false;
    let inputString=this.replaceAll("/\s+/g"," ").trim().toLowerCase();
    for(let char of inputString){
        if(char === " "){
            isWhiteSpace=true;
        }
        else if(isWhiteSpace){
            pascalCase.push(char.toUpperCase());
            isWhiteSpace=false;
        }
        else{
            pascalCase.push(char);
        }
    }
    pascalCase[0]=pascalCase[0].toUpperCase();
    return pascalCase.join("");
}
// snake case 
String.prototype.toSnakeCase=function(){
    let snakeCase=[];
    let isWhiteSpace=false;
    let inputString=this.replaceAll("/\s+/g"," ").trim().toLowerCase();
    for(let char of inputString){
        if(char === " "){
            isWhiteSpace=true;
        }
        if(isWhiteSpace){
            snakeCase.push("_");
            isWhiteSpace=false;
        }
        else{
            snakeCase.push(char);
        }
    }
    return snakeCase.join('');
}
// screaming snake case 
String.prototype.toScreamingSnakeCase=function(){
    let screamingSnakeCase=[];
    let isWhiteSpace=false;
    let inputString=this.replaceAll("/\s+/g"," ").trim().toUpperCase();
    for(let char of inputString){
        if(char === " "){
            isWhiteSpace=true;
        }
        if(isWhiteSpace){
            screamingSnakeCase.push("_");
            isWhiteSpace=false;
        }
        else{
            screamingSnakeCase.push(char);
        }
    }
    return screamingSnakeCase.join('');
}

// Kebab case 
String.prototype.toKebabCase=function (){
    let kebabCase=[];
    let isWhiteSpace=false;
    let inputString=this.replaceAll("/\s+/g"," ").trim().toLowerCase();
    for(let char of inputString){
        if(char === " "){
            isWhiteSpace=true;
        }
        if(isWhiteSpace){
            kebabCase.push("-");
            isWhiteSpace=false;
        }
        else{
            kebabCase.push(char);
        }
    }
    return kebabCase.join('');
}
// screaming kebab case 
String.prototype.toScreamingKebabCase = function (){
    let screamingKebabCase=[];
    let isWhiteSpace=false;
    let inputString=this.replaceAll("/\s+/g"," ").trim().toUpperCase();
    for(let char of inputString){
        if(char === " "){
            isWhiteSpace=true;
        }
        if(isWhiteSpace){
            screamingKebabCase.push("-");
            isWhiteSpace=false;
        }
        else{
            screamingKebabCase.push(char);
        }
    }
    return screamingKebabCase.join('');
}


function displayCases(){
    let inputElem=document.querySelector("#text");
    let inputVal=inputElem.value;
    let camelCase=document.querySelector("#camel-case");
    let pascalCase=document.querySelector("#pascal-case");
    let snakeCase=document.querySelector("#snake-case");
    let screamSnakeCase=document.querySelector("#screaming-snake-case");
    let kebabCase=document.querySelector("#kebab-case");
    let screamKebabCase=document.querySelector("#screaming-kebab-case");
    camelCase.textContent=inputVal.toCamelCase();
    pascalCase.textContent=inputVal.toPascalCase();
    snakeCase.textContent=inputVal.toSnakeCase();
    screamSnakeCase.textContent=inputVal.toScreamingSnakeCase();
    kebabCase.textContent=inputVal.toKebabCase();
    screamKebabCase.textContent=inputVal.toScreamingKebabCase();
}
let btnElem=document.querySelector("#convert-btn");
// adding event listener 
btnElem.addEventListener("click",displayCases);