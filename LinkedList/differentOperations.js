class node{
  constructor(data){
    this.data = data;
    this.next = null
  }
}

class linkedlist{
  constructor(){
    this.head = null;
  }

  push(data){
    const newNode = new node(data);
    if(!this.head){
      this.head = newNode;
      return;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = newNode;
  }

  prepend(data){
    const newNode = new node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAfter(value,newData){
    const newNode = new node(newData)
    let current = this.head;
    while(current){
      if(current.data === value){
        newNode.next = current.next;
        current.next = newNode;
        return;
        }
        current = current.next
    }
   
    console.log(`the value ${value} doesn't exists`)
  }
  delete(data){
    if(!this.head) return;
    if(this.head.data === data){
      this.head = this.head.next
      return;
    }
  let current = this.head;
  while(current.next){
    if(current.next.data === data){
      current.next = current.next.next;
      return
    }
    current = current.next
  }
}
display(){
  let current = this.head;
  while (current){
    console.log(current.data);
    current = current.next
  }
}
}

const list = new linkedlist();
list.push(12)
list.push(13)
list.push(14)
list.prepend(0)
list.display();
list.insertAfter(0,1)
list.delete(12)
list.display()