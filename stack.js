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
}

let k = new Stack(5);
console.log("Push ", k.push(1))
console.log("Push ", k.push(2))
console.log("Push ", k.push(3))
console.log("Push ", k.push(4))
console.log("Push ", k.push(5))
console.log("Push ", k.push(6))
console.log("Size ", k.length());
console.log("pop ", k.pop())
console.log("Size", k.length());
console.log("pop ", k.pop())
console.log("pop ", k.pop())
console.log("pop ", k.pop())
console.log("pop ", k.pop())
console.log("pop ", k.pop())
console.log("Push ", k.push(6))
console.log("Size", k.length());
