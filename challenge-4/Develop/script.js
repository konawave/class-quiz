var highscoreBtn = document.querySelector("#highscore")
var timer = document.querySelector("#timer")
var startBtn = document.querySelector("#start") //No start button quite yet. Will use datasets to make it visible/hidden. 
var questionBtn = document.querySelector("#question")

// Variables for answer buttons
var answer1 = document.querySelector("#answer1")
var answer2 = document.querySelector("#answer2")
var answer3 = document.querySelector("#answer3")
var answer4 = document.querySelector("#answer4")

var initials = ""

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
        choiches: ["Weathertop", "Bree-land", "Mirkwood", "Dol Guldur"],
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
        choices: ["Pippin Baggins", "Piper Perry", "Pipperos Parrow", "Peregrin Took"],
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

function countdown(){
    var timerCount = 80
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