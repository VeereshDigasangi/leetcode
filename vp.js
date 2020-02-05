class Stack {
  constructor(size) {
    this.count = 0;
    this.storage = {};
  }
  push(val) {
    this.storage[this.count] = val;
    this.count++;
  }
  pop() {
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
let isValid = function (a) {
  let t = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  let k = new Stack();
  for (var i = 0; i < a.length; i++) {
    if (t[a[i]]) {
      k.push(a[i]);
    }
    else if (!k.get()) {
      return false
    } else {
      if (isClosingBracket(a[i]) && t[k.get()] == a[i]) {
        k.pop();
      } else
        return false
    }
  }
  if (k.get())
    return false
  return true
}

function isOpenBracket(s) {
  if (s == '(' || s == '[' || s == '{')
    return true;
  return false;
}
function isClosingBracket(s) {
  if (s == ']' || s == '}' || s == ')')
    return true;
  return false;
}

let s = "{(){}[](){}()(){}}"
console.log(isValid(s));
