// https://dictionaryapi.dev/
const input=document.querySelector("input");
const infoText=document.getElementById("info-text");
const meaningContainerElement=document.getElementById("meaning-container");
const title=document.getElementById("title");
const meaning=document.getElementById("meaning");
const audio=document.getElementById("audio");


async function fetchAPI(word){
    try{
        //before reponse come
        infoText.style.display="block";//to search again
        meaningContainerElement.style.display="none";
 infoText.innerText=`Searching the meaning of "${word}" `

    // console.log(word);
    const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const result= await fetch(url)
    .then((response)=>
        response.json()
    )

    //after reponse
    if(result.title){
        meaningContainerElement.style.display="block";
        infoText.style.display="none";
        title.innerText=word;
        meaning.innerText="N/A"
        audio.style.display="none"
    }else{
        infoText.style.display="none";
        meaningContainerElement.style.display="block";
        audio.style.display="inline-flex";
        title.innerText=result[0].word;
        meaning.innerText=result[0].meanings[0].definitions[0].definition;
        audio.src=result[0].phonetics[0].audio;
    }


}
catch(error){
    console.log(error)
    infoText.innerText=`An error happened, Try again later`
}
}

input.addEventListener("keyup",(event)=>{
//   console.log(event.target.value);//we got the value we right into input field
//   console.log(event.key);//if we presswe got enter ,if we press backsacpe we got backspace
 if(event.target.value && event.key === "Enter"){
   fetchAPI(event.target.value);//fetch value which we enter into the input field
 }


})