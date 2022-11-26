# Tv and Movie Quiz

## ABOUT

A simple quiz game using HTML, CSS and Javascript where the questions are all based on Tv and Movie Trivia. The quiz will run through when started with the only other input the user will need to do is actually selecting one of the four provided answer options. The game will then give feedback on wether the user submitteed the correct answer or not. At the end of the quiz(when there or no more questions to pull) the game will then give you an option to finish quiz which will display your results, including as a percentage. The colours for the game were inspired by television series "The Simspons".

## FEATURES

### TITLE

Title is displayed at top of screen at start screen and during game. There is also a small .png image included.

![Title](assets/images/readme-images/quiz-title.png?raw=true "title")

### SCORE

Score is shown to user and updates when submitted answers are correct.

![Score](assets/images/readme-images/Score.png?raw=true "score")

A counter also keeps track of the highest score, which is stored and retrieved from browser's local storage.

![Score](assets/images/readme-images/localstorage-variable.png?raw=true "score")

### QUESTION COUNTER

A counter to keep track of the current and total question number.

![Score](assets/images/readme-images/question-counter.png?raw=true "score")

### QUESTION AREA

Questions are displayed in a large and easy to read font towards center of screen.

![Question](assets/images/readme-images/question-area.png?raw=true "question")

### ANSWER OPTIONS

Answer options are layed out vertically in four buttons. Colour is in pleasing contrast to background.

![AnswerOptions](assets/images/readme-images/answer-options.png?raw=true "answer-options")

### ANSWER FEEDBACK

Once an answer is submitted, as well as visual feedback via colours, a text response is also generated to povide feedback to user.

![Correct](assets/images/readme-images/correct-ans-resp.png?raw=true "correct")
![Incorrect](assets/images/readme-images/incorrect-ans-resp.png?raw=true "incorrect")

### FINISH QUIZ

Button to end quiz and calculate result.

![Results](assets/images/readme-images/fin-quiz.png?raw=true "results")

### QUIZ RESULTS

Quiz results are calculated and end of game and also provides the users score as a percentage.

![Results](assets/images/readme-images/results.png?raw=true "results")

### RESTART QUIZ

Button to restart game. Reseets question counter and shuffles questions.

![Restart](assets/images/readme-images/restart-game.png?raw=true "restart")

## FUTURE POSSIBLE FEATURES

* Time limit to be introduced per question.
* Animations upon answer response.

## TESTING

HTML testing: All .html pages passed validation with no errors.

![HTML validation](assets/images/readme-images/html-val.png?raw=true "html-validation")

CSS testing: The .css file raised errors with regards to the scale property, however these properties are key for the styling of the game and decision made to leave them in.

![CSS validation](assets/images/readme-images/css-val.png?raw=true "css-validation")

Javascript testing: The .js file passed validation with no errors, has some warning with regards to browser support.

![JS validation](assets/images/readme-images/jshint-val.png?raw=true "js-validation")

Google DevTools Lighthouse Testing: Site passed testing with score of '100' in all areas except for Search Engine Optimisation('80').

![Lighthouse](assets/images/readme-images/lighthouse.png?raw=true "restart")

Site and quiz game has been tested by multiple users across many devices with no major issues.

All buttons on page are operating as expected. Quiz game itself is working as expected. No bugs or errors found.

### Performance improvement: 

* Scale property to be removed from CSS as per validator errors.

### UNFIXED/KNOWN ISSUES

* No delay before button changes to red for incorrect answer, in contrast to correct answer behaviour.

### FIXED ISSUE

* Users were able to select multiple options for questions by repeatedly clicking buttons while answers were being displayed, causing the score to be inaccurate and questions to be skipped for the user.

## DEPLOYMENT PROCESS

This project was deployed to GitHub Pages through GitHub via GitPod.

The project was freuqently commited and commented throughout.

None of the code was directly copied from elsewhere.

Some issues were encountered and solutions to these problems were found via help from Google, W3Schools and YouTube.

## QUIZ CONTENT

The questions for this quiz were created using general trivia knowledge and with the help of Google searches and Wikipedia. Therefore the information in this quiz may not be 100% true or factual.

Television .png was downloaded from pngtree.com which is a royalty free site.