class node{
  constructor(value){
    this.value = value;
    this.next = null
  }
}

class linkedList{
  constructor(){
    this.head = null
    this.size = 0
  }
  
  prepend(value){
    const newNode = new node(value)
    //prepend new list
    if(!this.head){
      this.head = newNode
    }
    // prepend existing list
    else{
        newNode.next = this.head;
        this.head = newNode;
    }
    this.size++
  }
  append(value){

  }
  print(){
      let listValue = ""
      let curr = this.head
      while(curr){
        listValue += `${curr.value} -> `
        curr = curr.next;
      }
      console.log( listValue + "Null")
    
  }
}

const list = new linkedList()



list.prepend(10)
list.prepend(20)
list.prepend(30)
list.print()