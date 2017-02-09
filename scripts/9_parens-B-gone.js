exports.removeParens = function(string) {

  if  ( ( string[0] && string[1] ) === '(' && ( string[string.length - 1] && string[string.length - 2] ) === ')' ) {
    string = string.slice(1, -1)
  }

  let splitArray = string.split(')(')

  for (var i = 0; i < splitArray.length; i++) {
    while ( ( splitArray[i][0] && splitArray[i][1] ) === '(' && ( splitArray[i][splitArray[i].length - 1] && splitArray[i][splitArray[i].length - 2] ) === ')' ) {
      splitArray[i] = splitArray[i].slice(1, -1)
    }
  }
  return splitArray.join(')(')
}

// .split(/[()]+/)
// .split(/(\\.|\[(?:\\.|[^\]\\])+]|\((?:\?[:!=])?|\)(?:[*?+]\??|\{\d+,?\d*}\??)?)/g)
// .split(')(')

// step 1: if first and last two characters are both ( or ), remove the first and last
// step 2: split by ( ')(' )
// step 3: if first and last two characters of any pieces are both ( or ), remove first and last
// step 4: join by ( ')(' )

// let leftSide = string.split('(').join(' ').split('')
// let rightSide = string.split(')').join(' ').split('')
// let accumulator = []
//
// for (var i = 0; i < leftSide.length; i++) {
//   if ( leftSide[i] === rightSide[i] ) {
//     accumulator.push(leftSide[i])
//   }
//   if (leftSide[i] === ' ' && leftSide[i + 1] === leftSide[i] && leftSide[i] === leftSide[i + 2] ) {
//     accumulator.push(rightSide[i])
//   }
//   if (leftSide[i] !== ' ' && leftSide[i + 1] === leftSide[i] && leftSide[i] === leftSide[i + 2] ) {
//     accumulator.push(leftSide[i])
//   }
//   if (leftSide[i] === ' ' && ( leftSide[i + 1] !== leftSide[i]) ) {
//     accumulator.push(rightSide[i])
//   }
//   if (leftSide[i] !== rightSide[i] && leftSide[i] !== ' ' && ( leftSide[i + 1] !== leftSide[i]) ) {
//     accumulator.push(leftSide[i])
//   }
// }
// return accumulator.join('')
