exports.dateFix = function(array) {
  let datesArray = []

  for (var i = 0; i < array.length; i++) {
    datesArray.push(getDate( array[i] ) );
  }

  return datesArray
}

function getDate(input) {
  let acc = ''
  let mm = ''

    if (input.slice(0,3) === 'Jan') {
      mm = '01'
    }
    if (input.slice(0,3) === 'Feb') {
      mm = '02'
    }
    if (input.slice(0,3) === 'Mar') {
      mm = '03'
    }
    if (input.slice(0,3) === 'Apr') {
      mm = '04'
    }
    if (input.slice(0,3) === 'May') {
      mm = '05'
    }
    if (input.slice(0,3) === 'Jun') {
      mm = '06'
    }
    if (input.slice(0,3) === 'Jul') {
      mm = '07'
    }
    if (input.slice(0,3) === 'Aug') {
      mm = '08'
    }
    if (input.slice(0,3) === 'Sep') {
      mm = '09'
    }
    if (input.slice(0,3) === 'Oct') {
      mm = '10'
    }
    if (input.slice(0,3) === 'Nov') {
      mm = '11'
    }
    if (input.slice(0,3) === 'Dec') {
      mm = '12'
    }

    if (input[4] === '-') {
      acc = (input)
    }
    if (input[2] === '/' && input[6] >= 5) {
      acc = ('19' + input.slice(6, 8) + '-' + input.slice(0, 2) + '-' + input.slice(3, 5) )
    }
    if (input[2] === '/' && input[6] <= 4) {
      acc = ('20' + input.slice(6, 8) + '-' + input.slice(0, 2) + '-' + input.slice(3, 5) )
    }
    if (input[2] === '#' && input[3] >= 5) {
      acc = ('19' + input.slice(3, 5) + '-' + input.slice(0, 2) + '-' + input.slice(6, 8) )
    }
    if (input[2] === '#' && input[3] <= 4) {
      acc = ('20' + input.slice(3, 5) + '-' + input.slice(0, 2) + '-' + input.slice(6, 8) )
    }
    if (input[2] === '*') {
      acc = (input.slice(6, 10) + '-' + input.slice(3, 5) + '-' + input.slice(0, 2) )
    }
    if (input[3] === ' ' && input[8] >= 5) {
      acc = ('19' + input.slice(8, 10) + '-' + mm + '-' + input.slice(4, 6) )
    }
    if (input[3] === ' ' && input[10] >= 0) {
      acc = (input.slice(8, 12) + '-' + mm + '-' + input.slice(4, 6) )
    }
    else if (input[3] === ' ' && input[8] <= 4) {
      acc = ('20' + input.slice(8, 10) + '-' + mm + '-' + input.slice(4, 6) )
    }
    return acc
}
