class node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

class linkedlist{
  constructor(){
    this.head = null
    this.size = 0
  }
  
  // to check linkedlist is empty 
  isEmpty(){
    return this.size === 0
  }

  // to check size of linkedlist
  getSize(){
    return this.size
 }
}

const list = new linkedlist()
console.log("list is empty?", list.isEmpty());
console.log("List size",list.getSize());