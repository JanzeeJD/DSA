class node{
  constructor(data){
    this.data = data
    this.next = null;
  }
}
class linkedList{
  constructor(){
    this.head = null
  }

  addNewElem(data,t){
    const newNode = new node(data)
    if(!this.head){
      this.head = newNode;
      return
    }
      let current = this.head
      while(current){
        if(current.data===t){
        newNode.next = current.next
        current.next = newNode
        break;
      }
      current = current.next;
    }

  }

  addBefore(value,t){
    let newNode = new node(value)
    if(!this.head){
      this.head = newNode
      return;
    }
    if(this.head.data===t){
      newNode.next = this.head
      this.head = newNode;
      return;
    }
    let current = this.head
    while(current.next){
      if(current.next.data===t){
        newNode.next = current.next
        current.next = newNode
        break;
      }
      current = current.next;
    }
  }

  print(){
    let value = ""
    let current = this.head;
    while(current){
      value += `${current.data} => `
      current = current.next;
    }
    console.log(value)
  }
}

const list = new linkedList()
list.addNewElem(6)
list.addNewElem(7,6)
list.addNewElem(8,7)
list.addNewElem(9,8)
list.print()
list.addBefore(5,6)
list.addBefore(7.5,8)
list.print()
