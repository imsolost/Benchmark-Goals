var expect    = require("chai").expect;
var lairotcaf = require("../scripts/11_Lairotcaf");

describe("reverse factorial test", function() {
  it("should return the string 6!", function() {
    var moddedString  = lairotcaf.reverseFactorial( 720 );

    expect(moddedString).to.equal( '6!' );
  });

  it("should return the string none", function() {
    var moddedString  = lairotcaf.reverseFactorial( 37 );

    expect(moddedString).to.equal( 'none' );
  });

  it("should return the string 7!", function() {
    var moddedString  = lairotcaf.reverseFactorial( 5040 );

    expect(moddedString).to.equal( '7!' );
  });

});
