# 04 Web APIs: Code Quiz

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```

I need a code quiz

Variables: 
* Time
* Answer buttons
* Initials
There needs to be:
* View Highscore button (querySelector)(event listener)
    * Should take me to a sorted list of high scores saved to the local storage.
* Time counter (query selector)(setInterval, clearInterval)
    * If statement (i.e. time = 70, if time > 0, decrement)
    * Must decrement further if a question is answered wrong.
* Start Button (event listener)
* Section with the question and a selection of 4 answers to choose from. 
    * decrement if wrong
    * Move on to next question regardless.
        * Unsure how this is executed at the moment.
* if time = 0 or if last question answered, end quiz
* score = time remaining
* must be able to save score and initials to local storage.