const button=document.getElementById("btn");
const emojiName=document.getElementById("emoji-name");

const emoji=[];

const apiKey="4f75a1826785096ffed3c8e896a5d5fe4d42c318";
const url=`https://emoji-api.com/emojis?access_key=${apiKey}`


// async function getEmoji(){
// let response=await fetch(url);
// const  data= await response.json();
// for(let i=0;i<1500;i++)
// {
//     emoji.push({
//         emoCharacter:data[i].character,
//         emoCode:data[i].unicodeName,

//     })
// }}

// getEmoji();
button.addEventListener("click", async function(){
    let response=await fetch(url);
const  data= await response.json();
for(let i=0;i<1500;i++)
{
    emoji.push({
        emoCharacter:data[i].character,
        emoCode:data[i].unicodeName,

    })
}
const randomNum=Math.floor(Math.random()*emoji.length);
button.innerText=emoji[randomNum].emoCharacter;
emojiName.innerText=emoji[randomNum].emoCode;
})