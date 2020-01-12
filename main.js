// Creating Question class constructor to be used by every item in the database

class Question {
    constructor(subject,question,scope,answer){
        this._subject = subject;
        this._question = question;
        this._scope = scope;
        this._answer = answer;
    }

    // getters to avoid mistakenly altering one of the Question's properties
    get subject(){
        return this._subject
    }
    get question(){
        return this._question
    }
    get scope(){
        return this._scope
    }
    get answer(){
        return this._answer
    }
}

let questionArray = []
let q1 = new Question('geography','What percentage of country capitals are on the coast?','global',40);
questionArray.push(q1)
let q2 = new Question('technology','What percent of Internet users do not use email or search engines?','global',8);
questionArray.push(q2)
let q3 = new Question('sanitation','What percentage of people wash their hands after using the toilet?','global',19);
questionArray.push(q3)
let q4 = new Question('health','What percentage of adults in the United States will experience a mental illness in their lifetime?','US',46);
questionArray.push(q4)

// Random selector of questions from a given array. We should pass here the array with all possible questions as an argument.
getRandomQuestion = (arr) => {
    let i = Math.floor(Math.random()*arr.length);
    return arr[i];
}

// Function to calculate points earned by the guess
getEarnedPoints = (guess,correctAnswer) => {
    let cte = 4000;
    let result = cte - 200*Math.abs(Math.floor(guess - correctAnswer));
    if (result < 0){
        result = 0;
    } 
    if (result >= 2000){
        return `Congratulations! You won ${result} points with this guess.`
    } else if (result >= 1000){
        return `Not bad! You won ${result} points with this guess.`
    } else {
        return `You won ${result} points with this guess. Better luck next time.`
    }
    
}

// Here are the links to the html, setting the correct parameters

let subject = document.getElementById('subject')
let scope = document.getElementById('scope')
let question = document.getElementById('question')
let correctAnswer = document.getElementById('correct-answer')
let pointsEarned = document.getElementById('points-earned')
let checkAnswer = document.getElementById('checkAnswer')
let playAgain = document.getElementById('playAgain')
let currentQuestion

startGame = () => {
    document.getElementById('guess').value = 0;
    document.querySelector('.answer-container').style.visibility = 'hidden';
    currentQuestion = getRandomQuestion(questionArray)

    subject.innerHTML = `This question is about ${currentQuestion.subject}`
    scope.innerHTML = `The scope of this question is: ${currentQuestion.scope}`
    question.innerHTML = currentQuestion.question
    correctAnswer.innerHTML = `The correct answer is: ${currentQuestion.answer}%`
}

startGame();

// When clicked, the Check Answer button shows the correct answer and the points earned
checkAnswer.onclick = () => {
    let guess = document.getElementById('guess').value
    document.querySelector('.answer-container').style.visibility = 'visible';
    pointsEarned.innerHTML = getEarnedPoints(guess,currentQuestion.answer)
  }

// When clicked, the Play Again button refreshes the page
playAgain.onclick = () => {
    startGame();
  }