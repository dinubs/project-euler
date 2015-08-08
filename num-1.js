// Find the sum of all the multiples of 3 or 5 below a given number.

var i = 1;
var l = parseInt(process.argv[2]);
var sum = 0;

for (; i < l; i++) {
  if (i % 5 === 0 || i % 3 === 0) sum += i; // If i is divisible by 3 or 5 add it to the sum
}

// Log out the answer
console.log(sum);
