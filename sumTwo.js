function twoSum(numbers, target) {
  var map = [];
  var indexnum = [];

  for (let x = 0; x < numbers.length; x++) {
    if (map[numbers[x]] != null) {
      index = map[numbers[x]];
      indexnum[0] = index;
      indexnum[1] = x;
      return indexnum;
      // return [index,x];
      // break;
    }
    else {
      map[target - numbers[x]] = x;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 26));