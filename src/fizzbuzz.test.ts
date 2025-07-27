import { fizzBuzz } from './fizzbuzz';

describe('fizzbuzz', () => {
  it('returns the number', () => {
expect(fizzBuzz(1)).toBe(1);
  })
  it('returns "Fizz" when the number is divisible by 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(6)).toBe('Fizz');
    expect(fizzBuzz(9)).toBe('Fizz');
  });
  it('returns "Buzz" when the number is divisible by 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });
  it('returns "FizzBuzz" when the number is divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz')
  })
});
