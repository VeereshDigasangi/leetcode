function sumThreeUnsoreted(nums, target) {
  var storedIn = [];
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      var sum = nums[i] + nums[j];
      if (storedIn[nums[target-sum]]!=null){
        return [storedIn[target-sum],i,j];
      }else{
        storedIn[target-sum]=i

      }
      
    }
  }
}

console.log(sumThreeUnsoreted([5, 9, 7, 11, 2, 15], 2));
//todo using two for loop,use the last logic whic have done earlier for twoSum
//todo using one for loop
//x+y+z=target
//z=target-x-y
//storedIn[]