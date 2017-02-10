
//learn readline rl.question

exports.guessingGame = function() {
  let randomNumber =  Math.floor(Math.random() * 10 + 1)
  let correctGuess = false

  console.log(randomNumber)

  while (!correctGuess) {
    let guess = prompt('What is your guess?')

    if (guess > randomNumber) {
      console.log('you guessed too high')
    }
    if (guess < randomNumber) {
      console.log('you guessed too low');
    }
    if (guess == randomNumber) {
      correctGuess = true
      console.log('you guessed correctly')
    }
    if (guess === 'exit') {
      break
    }
  }
}
