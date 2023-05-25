var highscoreBtn = document.querySelector("#highscore")
var timer = document.querySelector("#timer")
var startBtn = document.querySelector("#start") //No start button quite yet. Will use datasets to make it visible/hidden. 
var answers = document.querySelector('#answers')
var questionTitle = document.querySelector('#question');
var quiz = document.querySelector('.quiz');
var scores = document.querySelector('#scores');
const scoreList = document.querySelector('#scoreList')

var initials = ""
var questionIndex = 0
var timerCount = 0
var scoreIndex = 0

var questions = [
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
        choices: ["Clementine", "Rose", "Thyme", "Lily"]
    }

]

// Function: Start quiz. Function must:
    // Activate on click event of the start button
    // setAttribute of the Start button to display:none
    // uses countdown function.
    // Call find questions function.
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    startBtn.setAttribute("style", "display:none");
    countdown();
    findQuestion();
}

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
// Function: Find questions. Function must:
    // Set current question (based on index of the array?)
    // Increment question index by 1
    // Set the text content of each of the choice buttons
        // Set the text of the created element to be equal to 
    // Add event listener for click on questions function
function findQuestion() {
    if (timerCount <= 0 || questionIndex >= 2) {
        endQuiz();
    }
    var question = questions[questionIndex];
    questionTitle.textContent = question.title
    answers.innerHTML = "";
    question.choices.forEach(function(choice, i){
        var pickBtn = document.createElement("button")
        pickBtn.setAttribute('class', 'choice')
        pickBtn.setAttribute('value', choice);
        pickBtn.textContent = `${i + 1}. ${choice}`;
        // pickBtn.textContent = question.choices[i];
        answers.appendChild(pickBtn);
        pickBtn.addEventListener('click', checkAnswer)
    })
}

// Function: Click on questions. Function must:
    // Check for boolean if answer is True or False
        // Decrement time if False
        // If time hits 0, ends quiz
    // Call end quiz function
function checkAnswer() {
    
    if (this.value !== questions[questionIndex].answer) {
        timerCount -= 10
        console.log(questionIndex)
        console.log(this.value);
        console.log(questions[questionIndex].answer);
        questionIndex++
        findQuestion();
    } else {
        console.log(questionIndex)
        console.log(this.value);
        console.log(questions[questionIndex].answer);
        questionIndex++
        findQuestion();
    }
    // add 'or if questionIndexx >= 11'
    

    // if (questions[questionIndex].title == 'undefined') {
    //     console.log('We did it!');
    // }
    // console.log(questionIndex)
}
// Function: End quiz. Function must:
    // !clear timer interval
    // bring score (remaining time) front and center
        // Make a variable for the quiz block
        // Make a variable for 
    // Call save user function
function endQuiz() {
    var endScore = document.createTextNode(timerCount);
    endScore.textContent = timerCount;
    quiz.append(endScore);
    quiz.setAttribute('style', 'text-align:center')
    answers.setAttribute('style', 'display: none');
    questionTitle.setAttribute('style', 'display: none');
    saveUser();
}

function saveUser() {
    const userInput = document.createElement("input");
    userInput.setAttribute('type', 'text');
    scores.setAttribute('type', 'submit');
    scores.append(userInput);
    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit';
    scores.append(submitBtn);

    submitBtn.addEventListener('click', function (){
        
        localStorage.setItem(scoreIndex, userInput.value + ' ' + timerCount);
        userInput.value = '';
        scoreIndex++;
        allScores();
    })
    allScores();
}

function allScores() {
    scores.remove(scoreList);
    scoreList.setAttribute('style', 'display: block');
    scores.appendChild(scoreList);
    for (i = 0; i < localStorage.length; i++) {
        let score = document.createElement('li');
        score.textContent = localStorage.getItem(i)
        console.log(localStorage.getItem(i));
        highScores.append(score);
        }
    }
