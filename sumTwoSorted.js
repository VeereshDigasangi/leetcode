function twoSum(numbers, target) {
  let j = numbers.length - 1;
  for (let i = 0; i < numbers.length;) {
    var sum = numbers[i] + numbers[j];
    if (sum > target) {
      j--;
    } else if (sum < target) {
      i++;
    } else
      if (sum == target) {
        return [i+1, j+1]
      }
  }
}

console.log(twoSum([2, 7, 11, 15], 17));

