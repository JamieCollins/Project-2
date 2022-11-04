document.getElementById("option-a").addEventListener("click", selectOption)
document.getElementById("option-b").addEventListener("click", selectOption)
document.getElementById("option-c").addEventListener("click", selectOption)
document.getElementById("option-d").addEventListener("click", selectOption)

document.getElementById("submit").addEventListener("click", checkAnswer)
document.addEventListener("DOMContentLoaded", getQuestion)


let optionA = document.getElementById("option-a")
let optionB = document.getElementById("option-b")
let optionC = document.getElementById("option-c")
let optionD = document.getElementById("option-d")

let queText = document.getElementById("quiz-que")

var i = 0;
var response = "";

function selectOption() {

    clearOptions();
    
    response = this.innerHTML;

    this.style.backgroundColor = "lightblue";

}

function getQuestion () {

        queText.innerHTML = questions[i].question;
        optionA.innerHTML = questions[i].options[0];
        optionB.innerHTML = questions[i].options[1];
        optionC.innerHTML = questions[i].options[2];
        optionD.innerHTML = questions[i].options[3];

}

function checkAnswer() {

    clearOptions();

    let correctScore = document.getElementById("score");
    let incorrectScore = document.getElementById("incorrect");

    if (response === questions[i].answer){
        correctScore.innerHTML++;
        alert ("Congratulations, you got it right!");
        i++;
        getQuestion();
    }   else if (response === ""){
        alert ("Please choose an answer.");
    }   else {
        incorrectScore.innerHTML++;
        alert ("Unfortunately that was not the correct answer.");
        i++;
        getQuestion();
    } 
    
    response = "";
    

}

function clearOptions () {

    optionA.style.backgroundColor = "white";
    optionB.style.backgroundColor = "white";
    optionC.style.backgroundColor = "white";
    optionD.style.backgroundColor = "white";

}