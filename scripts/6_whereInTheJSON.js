 fi
exports.fibbing = function(input) {

}

let obj = JSON.parse(jsonObj)

let jsonObj = '{
    "name": "William Shakespeare",
    "dead" : true,
    "works" : [
        {
            "name" : "Romeo and Juliet",
            "published" : 1591,
            "isAwesome" : true
        },
        {
            "name" : "Richard III",
            "published" : 1592,
            "isAwesome" : false
        }
    ],
    "favoriteSites" : [
        "tumblr",
        "4chan"
    ]
}'

let secondObj = {
  'a': 1,
  'b': {
    'apple': 2,
    'bacon': 3
  }
}

function searchArray(object, input) {
  let keys = Object.keys(object)
  let values = Object.values(object)
  let result = ''

  for (var i = 0; i < values.length; i++) {
    if (typeof(values[i] === 'object' && !Array.isArray(values[i]) ) ) {
      result = searchArray(values[i], input)
    }
    if (values[i] === input) {
        result = keys[i]
    }
    if ( Array.isArray(values[i]) ) {
      for (var j = 0; j < values[i].length; j++) {
        if (values[i][j] === input) {
          result = keys[i] + ' -> ' + j
        }
        // if (typeof(values[i] === 'object' && !Array.isArray(values[i]) ) ) {
        //
        // }
      }
    }
    return result
  }
}

function inputPath(object) {
    var result = null;
    if(object instanceof Array) {
        for(var i = 0; i < object.length; i++) {
            result = inputPath(object[i]);
        }
    }
    else
    {
        for(var key in object) {
            console.log(key + ': ' + object[key]);
            if(key == 'id') {
                if(object[key] == 1) {
                    return object;
                }
            }
            if(object[key] instanceof Object || object[key] instanceof Array)
                result = inputPath(object[key]);
        }
    }
    return result;
}
