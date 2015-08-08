// Find the largest palindrome made from the product of two 3-digit numbers.

var numDigits = parseInt(process.argv[2]); // Get the total number of digits in each number

var i = 0, lowEnd = '1', highEnd = '', palindrome = 0;

// Setup the low-end of numbers
for (; i < numDigits - 1; i++) {
  lowEnd += '0';
}

// Setup the high-end of numbers
i = 0;
for (; i < numDigits; i++) {
  highEnd += '9';
}

// Turn low-end and high-end into integers
lowEnd = parseInt(lowEnd), highEnd = parseInt(highEnd);

// Start checking for palindromes
for (; highEnd > lowEnd; highEnd--) {
  var tempHigh = highEnd;

  for (; tempHigh > lowEnd; tempHigh--) {
    var pal = (tempHigh * highEnd).toString();

    // If number is a palindrome and is greater than the current palindrome then set number to be new palindrome
    if (pal === pal.split('').reverse().join('') && parseInt(pal) > palindrome) {
      palindrome = parseInt(pal);
    }
  }
}

// Log out the answer
console.log(palindrome);
