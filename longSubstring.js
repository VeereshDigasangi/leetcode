var lengthOfLongestSubstring = function (s) {
  if (!s) {
    return 0;
  }
  //abcabcbb
  // pwwkew
  // dvvdf
  let map = new Map();
  let start = 0;
  let end = 0;
  let len = s.length;
  let max = 0;
  while (end < len) {
    map.set(s[end], getOrDefault(map, s[end]) + 1);
    while (map.get(s[end]) != 1) {
      map.set(s[start], map.get(s[start]) - 1);
      start++;
    }
    max = Math.max(max, end - start + 1);
    end++;
  }
  return max
};

function getOrDefault(map, key) {
  return map.get(key) || 0;
}


console.log(lengthOfLongestSubstring("abcabcbb"));