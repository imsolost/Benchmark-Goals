var expect    = require("chai").expect;
var scrabBag = require("../scripts/2_scrabBag");

describe("scrabBag test", function() {
  it("should return the remaining tiles", function() {
    var themTiles  = scrabBag.remainingTiles('AERETOXMYCNS_B');

    expect(themTiles).to.equal('10: E\n9: I\n8: A\n7: O\n5: N, R, T\n4: D, L, U\n3: G, S\n2: F, H, P, V, W\n1: B, C, J, K, M, Q, Y, Z, _\n0: X');
  });

});
