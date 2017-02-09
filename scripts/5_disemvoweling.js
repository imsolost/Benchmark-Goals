exports.disemvowel = function(string) {
  return string
    .replace(/(?!\w|\s)./g, '')
    .replace(/[aeiou]/ig,'')
    .toLowerCase()
    .split(' ')
    .join('')
}
