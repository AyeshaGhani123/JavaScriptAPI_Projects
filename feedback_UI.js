const feedbackContainers=document.querySelectorAll(".feedbackContainer");
const button=document.getElementById("btn")
let selectedContainer="";
const container=document.querySelector(".container");

feedbackContainers.forEach((FBContainer)=>{
FBContainer.addEventListener("click",(event)=>{
    removeActive();
    selectedContainer=event.target.innerText || event.target.parentNode.innerText;
       console.log(event.target.innerText || event.target.parentNode.innerText)
       event.target.classList.add("active");
       event.target.parentNode.classList.add("active");
    })
   

})
button.addEventListener("click",function(){
    if(selectedContainer!==""){
   container.innerHTML=`
   <strong>Thank you!</strong>
   <br>
   <br>
   <strong>Feedback:${selectedContainer}</strong>
   <p> We'll use your feedback to improve our customer support.</p>
   `;
    }
});

function removeActive(){
    feedbackContainers.forEach((FBContainer)=>{
 FBContainer.classList.remove("active");
    })
}
