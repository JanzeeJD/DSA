class LinkedList {
  constructor() {
    this.head = null;
  }

  addAtPosition(value, position) {
    if (position < 0) {
      console.log("Invalid position");
      return;
    }

    let newNode = new Node(value);
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let prev = null;
    let currentPosition = 0;
    while (current && currentPosition < position) {
      prev = current;
      current = current.next;
      currentPosition++;
    }

    if (currentPosition < position) {
      console.log("Position exceeds the length of the list.");
      return;
    }

    newNode.next = current;
    prev.next = newNode;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
