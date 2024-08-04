class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedlist {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new node(value)
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
    
  }
}

let list = new linkedlist()

list.append(2)
list.append(4)
list.append(6)
list.print()