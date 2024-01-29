let num1 = Math.ceil(Math.random()*50);
let num2 = Math.ceil(Math.random()*50);

document.getElementById("question").innerHTML = `What is ${num1} multiplied by ${num2}?`;
let inputE1 = document.getElementById("input");

let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score = 0;
}





let correctAns = num1 * num2;
let formE1 = document.getElementById("form");

formE1.addEventListener("submit", ()=>{
    let userAns = +inputE1.value;
    if (userAns === correctAns){
        score++;
    }
    else{
        score--;
    }

})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));}

    document.getElementById("score").innerText = `Score: ${score}`