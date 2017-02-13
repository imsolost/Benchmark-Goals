var expect    = require("chai").expect;
var fibber = require("../scripts/4_fibber");

describe("fibbonoci test", function() {
  it("should return the correct number", function() {
    var number  = fibber.fibbing('decimal 16');

    expect(number).to.equal(1001000);
  });
  it("should return the correct number", function() {
    var number  = fibber.fibbing('decimal 31');

    expect(number).to.equal(10100100);
  });
  it("should return the correct number", function() {
    var number  = fibber.fibbing('fib 10');

    expect(number).to.equal(1);
  });
  it("should return the correct number", function() {
    var number  = fibber.fibbing('fib 1');

    expect(number).to.equal(1);
  });
  it("should return the correct number", function() {
    var number  = fibber.fibbing('fib 11111');

    expect(number).to.equal(12);
  });

});
