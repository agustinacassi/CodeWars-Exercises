//1. Description
// Count the number of divisors of a positive integer n.
// Random tests go up to n = 500000.

//2. My Solution
function getDivisorsCnt(n) {
  let counter = 0;
  let divisors = 0;
  let i = 0;
  while (i <= 500000) {
    if (n % divisors == 0) {
      counter++;
    }
    divisors++;
    i++;
  }
  return counter;
}
