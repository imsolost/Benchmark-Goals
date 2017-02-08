var expect    = require("chai").expect;
var stringIndices = require("../scripts/3_stringIndices");

describe("String Index Calculator", function() {
  it("should return the word at the given index", function() {
    var thirdWord  = stringIndices.wordAtIndex('Catch me outside, how about that?', 3);

    expect(thirdWord).to.equal("outside");
  });
  it("should return '' if the number given is longer than the number of words in the sentence", function() {
    var twentyFirstWord  = stringIndices.wordAtIndex('I want to go to sleep', 21);

    expect(twentyFirstWord).to.equal("");
  });
  it("should return '' if the number given is negative", function() {
    var negativeOne = stringIndices.wordAtIndex('I want to go to sleep', -1);

    expect(negativeOne).to.equal("");
  });

});
