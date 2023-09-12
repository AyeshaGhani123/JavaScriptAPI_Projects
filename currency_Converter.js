//https://app.exchangerate-api.com
https://app.exchangerate-api.com/dashboard
//api key:96fe9c7020e3567890284fbe
const currencyFirst=document.getElementById("currency-first");
const currencySecond=document.getElementById("currency-second");
const inputFirst=document.getElementById("worth-first");
const inputSecond=document.getElementById("worth-second");
const paragraph=document.getElementById("exchange-rate");
updateRate()

async function updateRate(){
const response=await fetch(`https://v6.exchangerate-api.com/v6/96fe9c7020e3567890284fbe/latest/${currencyFirst.value}`);
const data=await response.json();
const rate=data.conversion_rates[currencySecond.value];
console.log(rate);
paragraph.innerText=`1 ${currencyFirst.value} = ${rate+" "+currencySecond.value}`
inputSecond.value=(inputFirst.value * rate)
}

currencyFirst.addEventListener("change",updateRate)
currencySecond.addEventListener("change",updateRate)
 inputFirst.addEventListener("input",updateRate)