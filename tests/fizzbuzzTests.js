fizzBuzz = require('../app/library.js').fizzBuzz;
describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return `Buzz` for number divisible by 20", function() {
    expect(fizzBuzz(20)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(fizzBuzz(45)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(fizzBuzz(63)).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by -20", function() {
    expect(fizzBuzz(-20)).toBe('Buzz');
  });

  it("should return `Fizz` for -9", function() {
    expect(fizzBuzz(-9)).toBe('Fizz');
  });

  it("should return `FizzBuzz` for -30", function() {
    expect(fizzBuzz(-30)).toBe('FizzBuzz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(7)).toBe(7);
  });

  it("should return -2 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(-2)).toBe(-2);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(101)).toBe(101);
  });

  it("should return 17 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(17)).toBe(17);
  });

  it("should return `FizzBuzz` for 30", function() {
    expect(fizzBuzz(30)).toBe('FizzBuzz');
  });

});