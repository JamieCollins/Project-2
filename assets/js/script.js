document.getElementById("option-a").addEventListener("click", selectOption)
document.getElementById("option-b").addEventListener("click", selectOption)
document.getElementById("option-c").addEventListener("click", selectOption)
document.getElementById("option-d").addEventListener("click", selectOption)

document.getElementById("submit").addEventListener("click", checkAnswer)


let optionA = document.getElementById("option-a")
let optionB = document.getElementById("option-b")
let optionC = document.getElementById("option-c")
let optionD = document.getElementById("option-d")

let queText = document.getElementById("quiz-que")

function selectOption() {

    clearOptions();
    
    response = this.innerHTML;

    this.style.backgroundColor = "lightblue";

}

function checkAnswer() {

    clearOptions();

    let i = 0; i < questions.length; i++;

        queText.innerHTML = questions[i].question;
        optionA.innerHTML = questions[i].options[0];
        optionB.innerHTML = questions[i].options[1];
        optionC.innerHTML = questions[i].options[2];
        optionD.innerHTML = questions[i].options[3];

    let correctScore = document.getElementById("score");
    let incorrectScore = document.getElementById("incorrect");

    if (response === questions[i].answer){
        correctScore.innerHTML++;
        alert ("Congratulations, you got it right!");
    }   else if (response === ""){
        alert ("Please choose an answer.");
    }   else {
        incorrectScore.innerHTML++;
        alert ("Unfortunately that was not the correct answer.");
    } 
    
    response = "";

}

function clearOptions () {

    optionA.style.backgroundColor = "white";
    optionB.style.backgroundColor = "white";
    optionC.style.backgroundColor = "white";
    optionD.style.backgroundColor = "white";

}