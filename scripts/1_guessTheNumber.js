
//learn readline rl.question

exports.wordAtIndex = function(string, number) {
  let splitString = string.replace(/(?!\w|\s)./g, '').split(' ')

  if (splitString[number - 1]) {
    return splitString[number - 1]
  }
  return ''
}

function guessingGame() {
  var randomNumber =  Math.floor(Math.random() * 10 + 1)
  let hasGuessedCorrectly = false

  console.log("I have thought of a random number in my brain!")

  while (!hasGuessedCorrectly) {
    var guess = prompt('What is your guess?')

    if (guess > randomNumber) {
      console.log('you guessed too high')
    }
    if (guess < randomNumber) {
      console.log('you guessed too low');
    }
    if (guess === randomNumber) {
      console.log('you guessed just right');
      hasGuessedCorrectly = true
      break
    }
    if (guess === 'exit') {
      break
    }
  }
}

// var randomNumber = Math.floor((Math.random() * 100) + 1);
//
// print("I have thought of a random number in the range of 1 to 100. Guess!");
//
// var hasGuessedCorrectly = false;
//
// while (!hasGuessedCorrectly)
// {
//     var guess = readline();
//     if (guess < randomNumber)
//     {
//         print("Lower");
//     }
//     else if (guess > randomNumber)
//     {
//         print("Higher");
//     }
//     else if (guess == randomNumber)
//     {
//         print("Good Job");
//         hasGuessedCorrectly = true;
//     }
// }
