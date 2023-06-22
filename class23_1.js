//*variables
//declare a var and assign it to a sentence as a string
//alert if the sentence is a question

const str = 'Is this the best week ever?'
alert( str.endsWith('?'))


//declare a var, assign it a string of multiple words, replace every "jr. dev" w "software engineer", and print it to the console
let strToChange = 'I am looking for jr. dev position.'
console.log( strToChange.replaceAll('jr. dev', 'software engineer'))

//*functions
//create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    let random = Math.random()
    if( random < .33 ){
        return 'rock'
    } else if ( random < .66 ) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

//conditionals
//create a function that takes in a choice (rock, paper, scisssors) and determines if they won a game of rock paper scissors
//against a bot using the above function
function checkWin(playerChoice){
    let botChoice = rockPaperScissors()
    if ( (playerChoice === 'rock' && botChoice === 'scissors') || 
    (playerChoice === 'paper' && botChoice === 'rock') ||
    (playerChoice === 'scissors' && botChoice === 'paper')){
        console.log('Winner')
    } else if ( playerChoice === botChoice ){
        console.log('Tied')
        } else {
            console.log('Loser')
        }
    }

checkWin('paper')


//loops
