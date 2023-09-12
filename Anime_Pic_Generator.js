//https://api.catboys.com/img  //api url
//https://api.catboys.com
//https://loading.io/ //for loading effect
const button=document.getElementById("btn");
const animeContainer=document.querySelector(".anime-container");
const animeImage=document.querySelector(".anime-image");
const animeName=document.querySelector(".anime-name");

const url="https://api.catboys.com/img";
button.addEventListener("click",async function(){

    try{
        button.disabled=true;
        button.innerText="Loading..."
        animeName.innerText="Updating..."
        animeImage.src="loading.svg";
        

    const response=await fetch(url);
    const data=await response.json();

    button.disabled=false;
    button.innerText="Get Anime"
    animeContainer.style.display="block";
  animeImage.src=data.url;
  animeName.innerText=data.artist;
;    }
    catch(error){
        console.log("error");
        
    button.disabled=false;
    button.innerText="Get Anime";
    animeName.innerText="An error happeneed, please try again later"

    }
})