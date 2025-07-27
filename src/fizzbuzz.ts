export function fizzBuzz(params:number): string | number {
  if (params % 3 === 0 && params % 5 === 0) { return "FizzBuzz"
  } else if (params % 3 === 0) {
    return "Fizz";
  } else if (params % 5 == 0) {
    return "Buzz"
  }
  return params
}
