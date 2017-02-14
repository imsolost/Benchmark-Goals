exports.remainingTiles = function(string) {
  let splitString = string.split('')
  let tiles = {
    A: 9,
    B: 2,
    C: 2,
    D: 4,
    E: 12,
    F: 2,
    G: 3,
    H: 2,
    I: 9,
    J: 1,
    K: 1,
    L: 4,
    M: 2,
    N: 6,
    O: 8,
    P: 2,
    Q: 1,
    R: 6,
    S: 4,
    T: 6,
    U: 4,
    V: 2,
    W: 2,
    X: 1,
    Y: 2,
    Z: 1,
    _: 2
  }
  return reversedWeededAndJoinedArray( createTilesArray( reduceTiles(tiles, splitString) ) )
}

const FREQUENCIES = {}

const findFrequencies = input => {
  const frequencies = Object.assign( {}, FREQUENCIES )

  input.split( '' ).forEach( letter => {
    frequencies[ letter ]--
  })

  return frequencies
}

{ a: 1, b: 2, c: 1 }
const frequencyDistribution = frequencies => {
  return frequencies.reduce( (memo, letterObject) => {
    const letter = Object.keys( letterObject )[ 0 ]
    const frequency = letterObject[ letter ]

    memo[ frequency ] = memo[ frequency ] || []
    memo[ frequency ].push( letter )

    return memo
  }, {} )
}

function reduceTiles(object, array) {
  for (var key in object) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === key) {
        object[key]--
      }
    }
  }
  return object
}

function createTilesArray(object) {
  let remainingTilesArray = [ [], [], [], [], [], [], [], [], [], [], [], [], [] ]

  for (var i = 0; i < remainingTilesArray.length; i++) {
    for (var key in object) {
      if (object[key] === i) {
      remainingTilesArray[i].push(key)
      }
    }
  }
  return innerArrayToString(remainingTilesArray)
}

function innerArrayToString(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = `${i}: ` + array[i].join(', ')
  }
  return array
}

function reversedWeededAndJoinedArray(array) {
  let accumulator = []
  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i].slice(-1) !== ' ') {
      accumulator.push(array[i])
    }
  }
  return accumulator.join('\n')
}
