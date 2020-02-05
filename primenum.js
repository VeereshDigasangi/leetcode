//prime number which devide itslef and 1
//2,3,5,7,11
function prime(n) {
  let s = 0;
  for (let i = 2; ; i++) {
    if (isprime(i)) {
      s++
    };
    if (s == n) {
      console.log('%dth prime number is', n, i)
      break
    }
  }
}

function isprime(n) {
  for (var i = 2; i <= Math.abs(n / 2); i++) {
    if (n % i == 0) {
      return false
    }
  }
  return true
}

prime(6)
