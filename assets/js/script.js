// answer option and submit button event listeners
document.getElementById("start").addEventListener("click", getQuestion);
document.getElementById("option-a").addEventListener("click", selectOption);
document.getElementById("option-b").addEventListener("click", selectOption);
document.getElementById("option-c").addEventListener("click", selectOption);
document.getElementById("option-d").addEventListener("click", selectOption);

// answer options and buttons
let optionA = document.getElementById("option-a");
let optionB = document.getElementById("option-b");
let optionC = document.getElementById("option-c");
let optionD = document.getElementById("option-d");
let finQuiz = document.getElementById("fin-quiz");

//question text
let queText = document.getElementById("quiz-que");

// score counters
let correctScore = document.getElementById("score");
let incorrectScore = document.getElementById("incorrect");

// question counter
var i = 0;

// response variable
var response = "";


// highlights option selected by user and assigns data to response
function selectOption() {

    clearOptions();
    
    response = this.innerHTML;
    this.style.backgroundColor = "blue";
    this.style.border = "8px solid yellow";
    if (response === questions[i].answer){
        this.style.backgroundColor = "green";
        this.style.border = "8px solid yellow";
    }   else {
        this.style.backgroundColor = "red";
        this.style.border = "8px solid yellow";
    } 
    selectOptionTimeout();

}

// answer submission timout and correct/incorrect answer highlight
function selectOptionTimeout() {
    timeout = setTimeout(myTimeout, 1000);
}

// answer submission timout and correct/incorrect answer highlight
function myTimeout() {

    if (optionA.innerHTML === questions[i].answer){
        optionA.style.backgroundColor = "green";
        optionA.style.borderColor = "green";
    }   else if (optionB.innerHTML === questions[i].answer){
        optionB.style.backgroundColor = "green";
        optionB.style.borderColor = "green";
    }   else if (optionC.innerHTML === questions[i].answer){
        optionC.style.backgroundColor = "green";
        optionC.style.borderColor = "green";
    }   else if (optionD.innerHTML === questions[i].answer){
        optionD.style.backgroundColor = "green";
        optionD.style.borderColor = "green";
    }   else {
        alert ("Please choose an answer.");
    }

    timeout = setTimeout(checkAnswer, 1000);
}

// clears highlighted answer options
function clearOptions () {

    optionA.style.backgroundColor = "#531aff";
    optionB.style.backgroundColor = "#531aff";
    optionC.style.backgroundColor = "#531aff";
    optionD.style.backgroundColor = "#531aff";

}

// gets question from array via index  
function getQuestion () {

    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game").style.display = "block";
    queText.innerHTML = questions[i].question;
    optionA.innerHTML = questions[i].options[0];
    optionB.innerHTML = questions[i].options[1];
    optionC.innerHTML = questions[i].options[2];
    optionD.innerHTML = questions[i].options[3];
    optionA.style.border = "none";
    optionB.style.border = "none";
    optionC.style.border = "none";
    optionD.style.border = "none";
        
}

// checks user answer against stored array answer, increments score accordingly, gets next question, clears user answer
function checkAnswer() {

    clearOptions();

    if (response === questions[i].answer){
        correctScore.innerHTML++;
        i++;
        document.getElementById("container").style.display = "none";
        document.getElementById("answer-response-cont").style.display = "block";
        document.getElementById("text-response").innerHTML = "Congratulations, that was the correct answer!";
        endQuiz();
    }   else {
        incorrectScore.innerHTML++;
        document.getElementById("container").style.display = "none";
        document.getElementById("answer-response-cont").style.display = "block";
        document.getElementById("text-response").innerHTML = "Unfortunately that was not the correct answer.";
        i++;
        endQuiz();
    } 
    
    response = "";
    timeout = setTimeout(nextQue, 2000);
    
}

// Gets next question, displays quiz box, removes answer response
function nextQue () {

    getQuestion();
    document.getElementById("answer-response-cont").style.display = "none";
    document.getElementById("container").style.display = "block";
    
}

// checks if current question is the last
function endQuiz () {

    if (i === questions.length){
        document.getElementById("fin-quiz-cont").style.display = "block";
        document.getElementById("answer-response-cont").style.display = "block";
        finQuiz.style.display = "block";
        finQuiz.innerHTML = "Finish Quiz";
        finQuiz.addEventListener("click", quizResults);
    } else {
        getQuestion();
    }

}

// ends quiz, displays results, displays restart quiz button
function quizResults () {

    document.getElementById("text-response").innerHTML = `Congratulations you scored ${correctScore.innerHTML} out of ${i}!`;
    finQuiz.innerHTML = "Restart quiz";
    finQuiz.addEventListener("click", resetQuiz);

}

// resets question counter and score and restarts game
function resetQuiz () {

    document.getElementById("answer-response-cont").style.display = "none";
    document.getElementById("container").style.display = "block";
    finQuiz.style.display = "none";
    i = 0;
    incorrectScore.innerHTML = "0";
    correctScore.innerHTML = "0";
    finQuiz.removeEventListener("click", resetQuiz);
    getQuestion ();
    
}