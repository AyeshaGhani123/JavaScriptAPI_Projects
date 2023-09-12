//https://api.quotable.io/random

const quote=document.getElementById("quote");
const author=document.getElementById("author");
const button=document.getElementById("btn");
const url="https://api.quotable.io/random";

async function getQuote(){
    try{

 quote.innerText="Updating.."   
 author.innerText="Updating.."   
button.innerText="Loading...";
button.disabled=true;
console.log("clicked");
const response=await fetch(url);
const data=await response.json();
const quoteContent=data.content;
const quoteAuthor=data.author;
quote.innerText=quoteContent;
author.innerText="~ "+quoteAuthor;

button.innerText="GET QUOTE";
button.disabled=false;
}

catch(error){
    console.log("error");
    quote.innerText="An error happened, try again later";
    author.innerText="An error happened";

    button.innerText="GET QUOTE";
button.disabled=false;
    }
   
}


getQuote()//anytime we freshes the website we get a quote 
button.addEventListener("click",getQuote);

