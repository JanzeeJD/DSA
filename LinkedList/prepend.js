class node{
  constructor(value){
    this.value = value;
    this.next = null ;
  }
}

class linkedList{
  constructor(){
    this.head = null
  }
  prepend(value){
    let newNode = new node(value)
    if(!this.head){
      this.head = newNode
    } else{
      newNode.next = this.head;
      this.head = newNode
    }
  }
  print(){
    if(!this.head){
      console.log("The list is empty");
    } else{
      
    }
  }
}
