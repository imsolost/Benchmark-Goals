var expect    = require("chai").expect;
var disemvoweling = require("../scripts/5_disemvoweling");

describe("disemvowel test", function() {
  it("should return the string without vowels", function() {
    var moddedString  = disemvoweling.disemvowel('Catch me outside, how about that?');

    expect(moddedString).to.equal("ctchmtsdhwbttht");
  });

});
