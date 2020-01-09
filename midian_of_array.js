var findMedianSortedArrays = function (nums1, nums2) {
  var s = nums1.concat(nums2)
  len = s.length;
  iseven = len % 2 == 0 ? true : false
  let i, median;
  i = Math.ceil((len / 2) - 1);
  if (iseven) {
    return median = (s[i] + s[i + 1]) / 2;
  } else {
    return median = s[i];
  }
};



findMedianSortedArrays([1, 2], [3, 4])