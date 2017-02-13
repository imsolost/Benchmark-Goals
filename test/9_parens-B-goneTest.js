var expect    = require("chai").expect;
var parens_B_gone = require("../scripts/9_parens-B-gone");

describe("parens_B_gone test", function() {
  it("should return the string with reduced parens", function() {
    var moddedString  = parens_B_gone.removeParens( '((1((23)(45)))6)' );

    expect(moddedString).to.equal( '((1((23)(45)))6)' );
  });

  it("should return the string with reduced parens", function() {
    var moddedString  = parens_B_gone.removeParens( '(((1234)(((5)67))))' );

    expect(moddedString).to.equal( '((1234)((5)67))' );
  });

  // it("should return the string with reduced parens", function() {
  //   var moddedString  = parens_B_gone.removeParens( '12((3))' );
  //
  //   expect(moddedString).to.equal( '12(3)' );
  // });

});
