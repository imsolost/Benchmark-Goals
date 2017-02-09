var expect    = require("chai").expect;
var whoWantsADate = require("../scripts/7_whoWantsADate");
var fs = require("fs");
var text = fs.readFileSync("/Users/ryankent/Desktop/LG/Benchmark-Goals/app/dates.txt").toString('utf-8');
var textByLine = text.split("\n")

describe("date fix test", function() {
  it("should return the correct date", function() {
    var correctedDates  = whoWantsADate.dateFix( textByLine );

    expect(correctedDates[0]).to.equal( '1965-09-21' );
  });
  it("should return the correct date", function() {
    var correctedDates  = whoWantsADate.dateFix( textByLine );

    expect(correctedDates[13]).to.equal( '2016-12-08' );
  });
  it("should return the correct date", function() {
    var correctedDates  = whoWantsADate.dateFix( textByLine );

    expect(correctedDates[29]).to.equal( '2012-11-20' );
  });
  it("should return the correct date", function() {
    var correctedDates  = whoWantsADate.dateFix( textByLine );

    expect(correctedDates[36]).to.equal( '1994-11-10' );
  });
  it("should return the correct date", function() {
    var correctedDates  = whoWantsADate.dateFix( textByLine );

    expect(correctedDates[42]).to.equal( '1965-11-20' );
  });

});
