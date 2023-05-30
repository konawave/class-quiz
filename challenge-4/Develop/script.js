// Variable for the timer element
const timer = document.querySelector("#timer")
// Variable for start button
const startBtn = document.querySelector("#start") 
// Variable for the section that displays the question
const questionTitle = document.querySelector('#question')
// Variable for section with answers
const answers = document.querySelector('#answers');
// Variable for section that includes both questions and answer
const quiz = document.querySelector('.quiz');
// Variable the container of the final score
const finalScore = document.querySelector('.finalScore');
// variable for the play again button
const playAgain = document.querySelector('.playAgain');

// Variable for which question we're currently on
var questionIndex = 0
// Variable for the timer value
var timerCount = 0
// Variable for storing score in local storage
var scoreIndex = 0

// Object containing all questions, titles, choices, and answers as properties of the object
const questions = [
    {
        name: "question1",
        title: "When Gandalf was battling the Balrog in Moria, he said: 'Fly ______'",
        choices: ["My friends", "You fools", "Away from here", "Far away"],
        answer: "You fools"
    },
    {
        name: "question2",
        title: "How old is Bilbo during his birthday party in 'The Fellowship of the Ring'?",
        choices: ["One hundred twenty", "Seventy two", "Eleventy one", "Eighty three"],
        answer: "Eleventy one"
    },
    {
        name: "question3",
        title: "What is Aragorn's father's name?",
        choices: ["Elendil", "Isildur", "Arathorn", "Annatar"],
        answer: "Arathorn"
    },
    {
        name: "question4",
        title: "Where did Frodo get stabbed by a Ringwraith?",
        choices: ["Weathertop", "Bree-land", "Mirkwood", "Dol Guldur"],
        answer: "Weathertop"
    },
    {
        name: "question5",
        title: "What was the name of the sword Bilbo gave to Frodo?",
        choices: ["Spike", "Sting", "Poker", "Shiv"],
        answer: "Sting"
    },
    {
        name: "question6",
        title: "Which forest were the Tree Ents found by Merry & Pippin?",
        choices: ["Fangorn", "Mirkwood", "Lothlorien", "Old Forest"],
        answer: "Fangorn"
    },
    {
        name: "question7",
        title: "What is Pippin's full name?",
        choices: ["Pippin Baggins", "Piper Proudfood", "Pipperos Parrow", "Peregrin Took"],
        answer: "Peregrin Took"
    },
    {
        name: "question8",
        title: "What was Denethor's title in the Kingdom of Gondor?",
        choices: ["King", "Regent", "Councillor", "Steward"],
        answer: "Steward"
    },
    {
        name: "question9",
        title: "What sense was Legolas known for?",
        choices: ["Sight", "Hearing", "Smell", "Touch"],
        answer: "Sight"
    },
    {
        name: "question10",
        title: "Who does Sam marry when he returns to the Shire?",
        choices: ["Clementine", "Rose", "Thyme", "Lily"],
        answer: "Rose"
    }

]


// Event listener for the start button to trigger the quiz.
startBtn.addEventListener("click", startQuiz);

// Starts timer, hides start button, and calls function to pull which question we're on.
function startQuiz() {
    startBtn.setAttribute("style", "display:none");
    countdown();
    findQuestion();
}

// function for the timer. Called in the function above.
function countdown(){
    timerCount = 80
    var timerCountdown = setInterval(function() {   
    
    if (timerCount > 0) {
        timer.textContent = timerCount;
        timerCount--;
    } else {
        timer.textContent = 0
        clearInterval(timerCountdown);
    }
    } , 1000)
}

// function decides which question we're using, and checks to see if the quiz should end.
function findQuestion() {
    if (timerCount <= 0 || questionIndex >= 10) {
        endQuiz();
    }
    const question = questions[questionIndex];
    const choiceList = document.querySelector('#answers')
    if (questionIndex < 10) {questionTitle.textContent = question.title}
    choiceList.innerHTML = "";
    if (questionIndex < 10) {question.choices.forEach(function(choice, i){
        var pickBtn = document.createElement("button")
        pickBtn.setAttribute('class', 'choice')
        pickBtn.setAttribute('value', choice);
        pickBtn.textContent = `${i + 1}. ${choice}`;
        choiceList.appendChild(pickBtn);
        pickBtn.addEventListener('click', checkAnswer)
    })}
}

// Checks to see if the quiz should end, and ensures that the timer doesn't go into the negatives if a wrong answer is chosen when the timer is below 10. Also increments the question index and calls the findQuestion function to move onto the next question.
function checkAnswer() {
    if (questionIndex >= 10) {
        endQuiz();
    }
    else if (this.value !== questions[questionIndex].answer) {
        console.log(questionIndex)
        console.log(this.value);
        console.log(questions[questionIndex].answer);
        questionIndex++
        if (timerCount > 10) {
            timerCount -= 10
        } else {
            timerCount = 0
        }
        findQuestion();
    } else {
        console.log(questionIndex)
        console.log(this.value);
        console.log(questions[questionIndex].answer);
        questionIndex++
        findQuestion();
    }
}

// Function that outlines what happens when the quiz ends.
function endQuiz() {
    var endScore = document.createElement('p');
    endScore.setAttribute('style', 'font-size: 35px')
    answers.setAttribute('style', 'display:none');
    questionTitle.setAttribute('style', 'display:none');
    endScore.textContent = timerCount;
    finalScore.append(endScore);
    finalText.setAttribute('style', 'display:block');
    saveUser();
}

// Function that uses local storage to save scores.
function saveUser() {
    const userInput = document.createElement("input");
    userInput.setAttribute('class', 'input');
    userInput.setAttribute('type', 'text');
    userInput.setAttribute('placeholder', 'Enter Initials')
    finalScore.setAttribute('type', 'submit');
    finalScore.append(userInput);
    const submitBtn = document.createElement('button');
    submitBtn.setAttribute('class', 'submit')
    submitBtn.textContent = 'Submit';
    finalScore.append(submitBtn);
    scoreIndex++;
    allScores();
    submitBtn.addEventListener('click', function (){
        localStorage.setItem(scoreIndex, userInput.value + ' ' + timerCount);
        userInput.value = '';
    })
}

// Function for displaying scores pulled from local storage.
function allScores() {
    timer.setAttribute('style', 'display:none');
    const scoreList = document.createElement('ul');
    let scoreArray = [];
    scoreList.setAttribute('style', 'display: block');
    scoreList.setAttribute('style', 'text-align:center');
    scores.appendChild(scoreList);
    for (i = 0; i < localStorage.length; i++) {
        scoreArray.push(localStorage.getItem(i));
        let score = document.createElement('li');
        score.textContent = scoreArray[i];
        scoreList.append(score);
        }
    playAgain.setAttribute('style', 'display: block');
    }
// Event listener added for play again button so the quiz restarts if clicked.
playAgain.addEventListener('click', function() {
    questionIndex = 0
    scoreList.remove('li');
    timer.setAttribute('style', 'display: block');
    playAgain.setAttribute('style', 'display:none');
    finalText.setAttribute('style', 'display:none');
    startQuiz();
})