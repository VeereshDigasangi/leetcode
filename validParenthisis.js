let s = "sdfashdfsadf(sdfasdfsadf)sdjfasjdf((ksjdnfasndf))skjnfks{andfn(skjdnf})(sjdjf(sdfksndf)(sdnf))"
// let ss = ""

// const base = "{}()[]";

// for (i = 0; i < s.length; i++) {
//   if (base.indexOf(s[i]) != -1)
//     ss += s[i]
// }

class Stack {
  constructor(size) {
    this.size = size;
    this.count = 0;
    this.storage = {};
  }
  push(val) {
    if (Object.keys(this.storage).length == this.size)
      return "Stack_Full"
    this.storage[this.count] = val;
    this.count++;
    return "Success"
  }
  pop() {
    if (this.count === 0)
      return "Stack is empty";
    this.count--;
    var val = this.storage[this.count];
    delete this.storage[this.count]
    return val;
  }
  length() {
    return this.count;
  }
  get() {
    return this.storage[`${this.count - 1}`]
  }
}
// ss = "()(())({})()(()({[]})){()}["
isvalid = function (a) {
  const base = "{}()[]";
  let ss = "";
  for (i = 0; i < s.length; i++) {
    if (base.indexOf(s[i]) != -1)
      ss += s[i]
  }
  if (ss.length % 2 != 0)
    return false;
  let t = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  let k = new Stack(a.length);
  for (var i = 0; i < a.length; i++) {
    if ("[{(".indexOf(a[i]) != -1) {
      k.push(a[i]);
    } else {
      if (")}]".indexOf(a[i]) != -1 && t[k.get()] == a[i]) {
        k.pop();
      } else
        return false
    }
  }
  if (k.get())
    return false
  return true
}

console.log(s);
console.log(isValid(ss));
