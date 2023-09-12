const celsius=document.getElementById("celsius");
const fahrenheit=document.getElementById("fahrenheit");
const kalvin=document.getElementById("kalvin");

function computeTemp(event){
console.log(event.target.value);
const currentValue= +event.target.value; //always get the number
switch (event.target.name) {
    case "celsius":
        kalvin.value=(currentValue + 273.32).toFixed(2);
        fahrenheit.value=(currentValue * 1.8 + 32).toFixed(2);
        break;

     case "fahrenheit":
         kalvin.value=((currentValue - 32) / 1.8 + 273.32 ).toFixed(2);
         celsius.value=((currentValue - 32) / 1.8).toFixed(2);
        break;
    case "kalvin":
        celsius.value=(currentValue - 273.32).toFixed(2);
        fahrenheit.value=((currentValue - 273) * 1.8 + 32).toFixed(2);
        break;    
    default:

        break;
}
}
// toFixed(2) large decimal numbers nh dega sirf 2 he dega
//we added event 
//onchange="computeTemp(event)" in html,so we can get the value of name,type,id or whatever inside that input