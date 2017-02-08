var expect    = require("chai").expect;
var scrabBag = require("../scripts/2_scrabBag");

describe("scrabBag test", function() {
  it("should return the remaining tiles", function() {
    var moddedString  = scrabBag.remainingTiles( 'AAAA' );

    expect(moddedString).to.equal( 5 );
  });

  // it("should return the string with reduced parens", function() {
  //   var moddedString  = parens_B_gone.removeParens( '(((1234)(((5)67))))' );
  //
  //   expect(moddedString).to.equal( '((1234)((5)67))' );
  // });



});
