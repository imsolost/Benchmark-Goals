
exports.wordAtIndex = function(string, number) {
  let splitString = string.replace(/(?!\w|\s)./g, '').split(' ')

  if (splitString[number - 1]) {
    return splitString[number - 1]
  }
  return ''
}
