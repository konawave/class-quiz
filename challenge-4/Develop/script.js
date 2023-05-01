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

// Event listener for highscoreBtn:
startBtn.addEventListener("click", function() {
    countdown();
    questionBtn.textContent = "When Gandalf was battling the Balrog in Moria, he said: 'Fly _______'";
    console.log(question);
    answer1.textContent = "My friends.";
    answer2.textContent = "You fools.";
    answer3.textContent = "Away from here.";
    answer4.textContent = "Far away.";


})
// Event listener for each answer question

// 