const height=document.getElementById("height");
const weight=document.getElementById("weight");
const result=document.getElementById("bmi-result");
const button=document.getElementById("btn");
const weightCondition=document.getElementById
("weight-condition");
button.addEventListener("click",function computBMI(){
    // console.log("clicked");
    const heightValue=height.value / 100;
    const weightValue=weight.value;
    // console.log(heightValue,weightValue);
    const bmiValue=weightValue / (heightValue * heightValue);
    console.log(bmiValue);
    result.value=bmiValue;
    if(bmiValue<18.5){
        weightCondition.innerText="Under Weight";
    } else if(bmiValue>=18.5 && bmiValue<=24.9){
        weightCondition.innerText="Normal Weight";
    }else if(bmiValue>=25 && bmiValue<=29.9){
        weightCondition.innerText="Over Weight";
    }
    else if(bmiValue>=30){
        weightCondition.innerText="Obesity";
    }
})


