exports.fibbing = function(input) {
  if (input.substring(0,3) === 'fib') {
    return fibToDec( Number( input.split(' ')[1] ) )
  }
  if (input.substring(0,3) === 'dec') {
    return decToFib( Number( input.split(' ')[1] ) )
  }
}

function fibToDec(number) {
  let sum = 0

  for (var i = 0; i < reverseFibArray(number).length; i++) {
    if ( number.toString().split('')[i] == 1 ) {
      sum = sum + reverseFibArray(number)[i]
    }
  }
  return sum
}

function fibonacci(number) {
  if (number <= 1) return 1

    return fibonacci(number - 1) + fibonacci(number - 2);
}

function reverseFibArray(number) {
  let accumulator = []

  for (var i = 0; i < number.toString().length; i++) {
    accumulator.push( fibonacci(i) )
  }

  return accumulator.reverse()
}

function reverseDecArray(number) {
  let accumulator = []

  for (var i = 0; i < number; i++) {
    accumulator.push( fibonacci(i) )
  }

  return accumulator.reverse()
}

function decToFib(number) {
  let target = 0
  let i = 0
  let fibArray = []
  let fibSum = 0

  while (target < number) {
    target = arraySum( reverseDecArray(i) )
    i++
  }

  for (var j = 0; j < reverseDecArray(i).length; j++) {

    if ( reverseDecArray(i)[j] <= number && fibSum + reverseDecArray(i)[j] <= number ) {
      fibArray.push(1)
      fibSum = fibSum + reverseDecArray(i)[j]
    }
    else {
      fibArray.push(0)
    }
  }
  return Number( fibArray.join('') )
}

function arraySum(array) {
  return array.reduce(function(a, b) {
    return a + b
  }, 0)
}
