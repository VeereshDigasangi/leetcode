class Stack {
  constructor(size) {
    this.size = size;
    this.count = 0;
    this.lowestCount = 0;
    this.storage = {};
  }
  push(val) {
    if (this.count - this.lowestCount == this.size)
      return "Queue_Full"
    this.storage[this.count] = val;
    this.count++;
    return "Success"
  }
  pop() {
    if (this.count - this.lowestCount <= 0)
      return "Queue is empty";
    var val = this.storage[this.lowestCount];
    delete this.storage[this.lowestCount]
    this.lowestCount++;
    return val;
  }
  length() {
    return this.count - this.lowestCount;
  }
}

let k = new Stack(15);
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
