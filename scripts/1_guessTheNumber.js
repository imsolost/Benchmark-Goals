
//learn readline rl.question

exports.guessingGame = function() {
  let randomNumber =  Math.floor(Math.random() * 100 + 1)
  let correctGuess = false

  console.log(randomNumber)

    while (!correctGuess) {
      checkGuess( prompt( 'What is your guess?' ))
    }
}

function checkGuess( guess ) {
  if (guess > randomNumber) {
  return('you guessed too high')
  }
  if (guess < randomNumber) {
  return('you guessed too low');
  }
  if (guess == randomNumber) {
    correctGuess = true
  return('you guessed correctly')
  }
  if (guess === 'exit') {
    return('exit')
  }
}
