// What is the largest prime factor of a given number?

var l = parseInt(process.argv[2]); // Get given number from command line
var i = 2;
var largestPrime = l; // Set current largest prime to number in case given number is also a prime number

// Check if a given number is a prime number
function checkPrime(num) {
  var x = 2;
  for (; x < num; x++) {
    if (num % x === 0) {
      return false;
    }
  }  
  return true;
}

// Loop through numbers to find the largest prime factor
for (; i < l; i++) {
  if (l % i === 0) {
    l = l / i;
    if (checkPrime(l)) {
      largestPrime = l;
      break;
    }
  }
}

// Log out the answer
console.log(largestPrime);
