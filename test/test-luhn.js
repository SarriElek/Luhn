var assert = require("chai").assert;
var luhn = require("../index");

describe("Luhn Algorithm", function() {
  it("should return double if a index is a odd index given the number 7384738438", function() {
    var number = 7384738438;
    var result = luhn.doubleOdds(number);
    assert.isTrue(result === 7688768837);
  });
  it("should return double if a index is a odd index given the any number", function() {
    var number = 7384738434;
    var result = luhn.doubleOdds(number);
    assert.isTrue(result === 7688768838);
  });
  it("should return double - 9 if a index is a odd index and bigger than 9 given the any number", function() {
    var number = 7384738438;
    var result = luhn.doubleOdds(number);
    assert.isTrue(result === 7688768837);
  });
  it("should return a sum of all the numbers from doubleOdds output", function() {
    var number = 7384738438;
    var result = luhn.sumDigits(luhn.doubleOdds(7384738438));
    assert.isTrue(result === 68);
  });
  it("should return true for 79927398713", function() {
    var result = luhn.check(79927398713);
    assert.isTrue(result);
  });
  it("should return false 79927398712", function() {
    var result = luhn.check(79927398712);
    assert.isFalse(result);
  });
  it("should return false if there is a character", function() {
    var result = luhn.check("eeee");
    assert.isFalse(result);
  });
  it("should return false if there is an object", function() {
    var result = luhn.check(new Object());
    assert.isFalse(result);
  });
  it("should return false if there is an array", function() {
    var result = luhn.check([7,7,7,7,7]);
    assert.isFalse(result);
  });
});