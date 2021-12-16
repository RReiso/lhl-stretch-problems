const canJump = function(nums) {
  if (nums[0] === 0 && nums.length > 1) return false;
  if (nums[0] === 0 && nums.length === 1) return true;

  let index = 0;
  let jump = 1;
  while (nums[index] >= 0) {
    let maxJumps = nums[index];
    let jumpsTillEnd = nums.length - index - 1;

    // return true if current digit can jump to the last digit
    if (maxJumps === jumpsTillEnd) return true;
    
    if (maxJumps === 0) {
      // set index to the index of the last non-zero digit
      index = index - jump;
      maxJumps = nums[index];

      // return false if maxJump takes to 0
      if (maxJumps === jump) {
        return false;
      }

      // increase the jump size, set index to the next digit after current 0
      jump++;
      index = index + jump;

    } else {
      //  current digit is not 0, reset jump, go to the next digit
      jump = 1;
      index++;
    }
  }
  return true;
};
console.log(canJump([2,5,0,0,1,0,2]));// true
console.log(canJump([1,0,1]));// false

console.log(canJump([2,3,0,0,1,0,2]));// false
console.log(canJump([2,3,0,0,4,0,2]));// true

console.log(canJump([2,4,0,0,4,0,2]));// true
console.log(canJump([3,2,1,0,4]));// false
