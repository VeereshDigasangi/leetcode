class Node {
  constructor(data) {
    this.instance = {
      data: data,
      left: undefined,
      right: undefined
    }
  }
}

class BinarySearch {
  constructor() {
    this.root = null
  }
  insert(value) {
    var newNode = new Node(value);

    if (this.root == null)
      this.root = newNode;
    else
      insertNode(this.root, newNode)
  }
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left == null)
        node.left = newNode
      else
        this.insertNode(node.left, newNode)
    } else {
      if (node.right == null)
        node.right = newNode;
      else
        this.insertNode(node.right, newNode)
    }
  }
}




// var k = new BinarySearch(40);
// console.log(k.contains(401))
// console.log(k.insert(401))
// console.log(k.contains(401))
// console.log(k.depthFirstLog())

