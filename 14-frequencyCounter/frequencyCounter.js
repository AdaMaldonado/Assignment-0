function frequencyCounter(word) {
  // Insert code here;
  let counter = {};
  let letters = word.split("");
  for (let i = 0; i < letters.length; i++) {
    if (counter[letters[i]]) {
      counter[letters[i]]++;
    } else {
      counter[letters[i]] = 1;
    }
  }
  return counter;
}

// Do not edit this line;
module.exports = frequencyCounter;