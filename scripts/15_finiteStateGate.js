

input = 'remoteClicked\ncycleComplete\nremoteClicked\nremoteClicked\nremoteClicked\nremoteClicked\nremoteClicked\ncycleComplete'
inputArray = input.split('\n')

complete
  closed
  open

paused
  stoppedWhileOpening
  stoppedWhileClosing

moving
  opening
  closing

function updateGate(input) {
  let inputArray = input.split('\n')
  let statusArray = ['Gate: CLOSED']
  let closing, opening, closed, open, stoppedWhileClosing, stoppedWhileOpening, complete = true, paused = false, moving = false
  let status = closed

  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === 'remoteClicked') {
      statusArray.push('Remote clicked.')

      if (status === stoppedWhileClosing && paused === true) {
        status = opening
        paused = false
        moving = true
        statusArray.push('Gate: OPENING')
      }
      if (status === stoppedWhileOpening && paused === true) {
        status = closing
        paused = false
        moving = true
        statusArray.push('Gate: CLOSING')
      }

      if (status === closing && moving === true) {
        status = stoppedWhileClosing
        paused = true
        moving = false
        statusArray.push('Gate: STOPPED_WHILE_CLOSING')
      }
      if (status === opening && moving === true) {
        status = stoppedWhileOpening
        paused = true
        moving = false
        statusArray.push('Gate: STOPPED_WHILE_OPENING')
      }

      if (status === closed && complete === true) {
        status = opening
        complete = false
        moving = true
        statusArray.push('Gate: OPENING')
      }
      if (status === open && complete === true) {
        status = closing
        complete = false
        moving = true
        statusArray.push('Gate: CLOSING')
      }
    }

    else if (inputArray[i] === 'cycleComplete') {
      statusArray.push('Cycle complete.')
      if (status === opening && moving === true) {
        status = open
        complete = true
        moving = false
        statusArray.push('Gate: OPEN')
      }
      if (status === closing && moving === true) {
        status = closed
        complete = true
        moving = false
        statusArray.push('Gate: CLOSED')
      }
    }
  }
  return statusArray.join('\n')
}


function updateGate(input) {
  let inputArray = input.split('\n')
  let statusArray = ['Gate: CLOSED']
  let closing, opening, closed, open, stoppedWhileClosing, stoppedWhileOpening
  let status = closed
  let actionCount = 0

  for (var i = 0; i < inputArray.length; i++) {
  
    if (inputArray[i] === 'remoteClicked') {
      statusArray.push('Remote clicked.')

      if (status === stoppedWhileClosing && actionCount === i) {
        status = opening
        actionCount = actionCount + 1
        statusArray.push('Gate: OPENING')
      }
      if (status === stoppedWhileOpening && actionCount === i) {
        status = closing
        actionCount = actionCount + 1
        statusArray.push('Gate: CLOSING')
      }

      if (status === closing && actionCount === i) {
        status = stoppedWhileClosing
        actionCount = actionCount + 1
        statusArray.push('Gate: STOPPED_WHILE_CLOSING')
      }
      if (status === opening && actionCount === i) {
        status = stoppedWhileOpening
        actionCount = actionCount + 1
        statusArray.push('Gate: STOPPED_WHILE_OPENING')
      }

      if (status === closed && actionCount === i) {
        status = opening
        actionCount = actionCount + 1
        statusArray.push('Gate: OPENING')
      }
      if (status === open && actionCount === i) {
        status = closing
        actionCount = actionCount + 1
        statusArray.push('Gate: CLOSING')
      }
    }

    if (inputArray[i] === 'cycleComplete') {
      statusArray.push('Cycle complete.')
      if (status === opening && actionCount === i) {
        status = open
        actionCount = actionCount + 1
        statusArray.push('Gate: OPEN')
      }
      if (status === closing && actionCount === i) {
        status = closed
        actionCount = actionCount + 1
        statusArray.push('Gate: CLOSED')
      }
    }
  }
  return statusArray.join('\n')
}
