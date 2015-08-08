// By considering the terms in the Fibonacci sequence whose values do not exceed a give number, find the sum of the even-valued terms.

var i = 0;
var cachedFib = 0;
var fib = 1;
var sum = 0;
var largestSum = parseInt(process.argv[2]);

while (fib < largestSum) {
  if (fib % 2 === 0) sum += fib; // Check if current Fibonacci number is even then add it to the sum
  var tempFib = fib;
  fib += cachedFib;
  cachedFib = tempFib; // Cache the temp fib for later use
}

// Log out the answer
console.log(sum);
