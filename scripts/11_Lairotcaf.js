exports.reverseFactorial = function(number) {
  let acc = 1
  let i = 1

  while (acc < number) {
    acc = acc * i
    i++
  }
  if (acc === number) {
    return i - 1 + '!'
  }
  else {
    return 'none'
  }
}
