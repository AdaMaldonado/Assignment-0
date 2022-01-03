function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = start; j <= end; j++) {
      if (nums[i] === j) {
        count++;
      }
    }
  }
  return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;