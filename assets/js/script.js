// recieves first question from array once document has loaded
document.addEventListener("DOMContentLoaded", getQuestion)

// answer option and submit button event listeners
document.getElementById("option-a").addEventListener("click", selectOption)
document.getElementById("option-b").addEventListener("click", selectOption)
document.getElementById("option-c").addEventListener("click", selectOption)
document.getElementById("option-d").addEventListener("click", selectOption)
document.getElementById("submit").addEventListener("click", checkAnswer)
document.getElementById("next-que").addEventListener("click", nextQue)

let optionA = document.getElementById("option-a")
let optionB = document.getElementById("option-b")
let optionC = document.getElementById("option-c")
let optionD = document.getElementById("option-d")
let submit = document.getElementById("submit")
let nextQuestion = document.getElementById("next-que")

let queText = document.getElementById("quiz-que")

var i = 0;
var response = "";

// highlights option selected by user and assigns data to response
function selectOption() {

    clearOptions();
    
    response = this.innerHTML;

    this.style.backgroundColor = "#4dff4d";

}

// gets question from array via index
function getQuestion () {

        queText.innerHTML = questions[i].question;
        optionA.innerHTML = questions[i].options[0];
        optionB.innerHTML = questions[i].options[1];
        optionC.innerHTML = questions[i].options[2];
        optionD.innerHTML = questions[i].options[3];

}

// checks user answer against stored array answer, increments score accordingly, gets next question, clears user answer
function checkAnswer() {

    clearOptions();

    let correctScore = document.getElementById("score");
    let incorrectScore = document.getElementById("incorrect");

    if (response === questions[i].answer){
        correctScore.innerHTML++;
        i++;
        document.getElementById("container").style.display = "none";
        document.getElementById("answer-response-cont").style.display = "contents";
        document.getElementById("text-response").innerHTML = "Congratulations, that was the correct answer!";
        endQuiz();
    }   else if (response === ""){
        alert ("Please choose an answer.");
    }   else {
        incorrectScore.innerHTML++;
        document.getElementById("container").style.display = "none";
        document.getElementById("answer-response-cont").style.display = "contents";
        document.getElementById("text-response").innerHTML = "Unfortunately that was not the correct answer.";
        i++;
        endQuiz();
    } 
    
    response = "";
    
}

// Gets next question, displays quiz box remove answer response
function nextQue () {

    getQuestion();
    document.getElementById("answer-response-cont").style.display = "none";
    document.getElementById("container").style.display = "contents";
    
}

// clears highlighted answer options
function clearOptions () {

    optionA.style.backgroundColor = "#531aff";
    optionB.style.backgroundColor = "#531aff";
    optionC.style.backgroundColor = "#531aff";
    optionD.style.backgroundColor = "#531aff";

}

// checks if current question is the last
function endQuiz () {

    if (i === questions.length){
        nextQuestion.innerHTML = "Finish Quiz!"
        nextQuestion.addEventListener("click", quizResults)
    } else {
        getQuestion();
    }

}

// ends quiz displays results
function quizResults () {

    alert ("Congratulations! you scored");

}