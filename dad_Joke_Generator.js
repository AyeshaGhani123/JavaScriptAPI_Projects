// https://api-ninjas.com/
// https://api-ninjas.com/api/dadjokes
const button=document.querySelector(".btn");
const joke=document.querySelector(".joke");
const apiKey="dlTr9KVmPiQty4/bqB+uoA==ZBwmRwnADVE7VgrV";
const options={
    method:"GET",
    headers:{
        "X-Api-Key":apiKey,
    },
};
const URL="https://api.api-ninjas.com/v1/dadjokes?limit=";
button.addEventListener("click",async function(){
    try{
    joke.innerText="Updating..."
    button.disabled=true;
    button.innerText="Loading...";

    const response=await fetch(URL,options)
    const data=await response.json();

    button.disabled=false;
    button.innerText="TELL ME A JOKE";

    console.log(data[0].joke);
    joke.innerText=data[0].joke;}
    catch(error){
        joke.innerText="An error happened, try again later"
    }
})