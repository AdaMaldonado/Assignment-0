function isPalindrome(word) {
  // Insert code here;
  let letters = word.split("");
  let isPal = false;
  for (let i = 0; i < letters.length/2 ; i++) {
    if (letters[i] === letters[letters.length - i - 1]) {
      isPal = true;
    } else {
      return false;
    }
  } 
  return isPal;
}

// Do not edit this line;
module.exports = isPalindrome;