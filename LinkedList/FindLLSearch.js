class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

class linkedlist{
constructor(){
  this.head = null
}

// add element to the last
append(value){
  const newNode = new Node(value)
  if(!this.head){
    this.head = newNode
  }
  else{
    let current = this.head
    while(current.next){
      current = current.next
    }
    current.next = newNode
  }
}

//add element to the front
prepend(value){
  let newNode = new Node(value)
  if(!this.head){
    this.head = newNode
  }else{
    newNode.next = this.head
    this.head = newNode
  }
}

// reverse linkedList
 reverse(){
  let curr = this.head
  let prev = null
  while(curr){
    let temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }
  this.head = prev
 }

// find middle 
middleElem(){
  let slow = this.head;
  let fast = this.head
  while(fast&&fast.next){
    slow = slow.next
    fast = fast.next.next
  }
  let middle = slow.value
  console.log(middle)
}

//deleteMiddle
deleteMiddle(){
  let slow = this.head
  let fast = this.head
  let prev = null
  while(fast&&fast.next){
     prev = slow;
     slow = slow.next
     fast = fast.next.next
     }
     if(prev){
      prev.next = slow.next
     }else{
      this.head = slow.next;
     }
}

addMiddleElem(value){
  let newNode = new Node(value)
  if(!this.head){
    this.head = newNode
    return
  }
  let slow = this.head
  let fast = this.head
  let prev = null
  while(fast&&fast.next){
    prev = slow;
    slow = slow.next;
    fast = fast.next.next
  }
  if(prev){
    newNode.next = slow.next;
    slow.next = newNode;
  }else{
  newNode.next = this.head;
  this.head = newNode;
  }
}
print(){
  let curr = this.head
  let value = ""
  while(curr){
    value+= `${curr.value} -> `
    curr = curr.next
  }
  console.log(value);
}
}

let ll = new linkedlist()
ll.append('J')
ll.append('A')
ll.append('N')
ll.prepend('JD')
ll.middleElem()
ll.print()
ll.deleteMiddle()
ll.print()
ll.addMiddleElem("C")
ll.addMiddleElem('A')
ll.print()