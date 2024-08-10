class node{
  constructor(data){
      this.data = data
      this.next = null
  }
}

class linkedlist{
  constructor(){
      this.head = null
  }

  append(data){
      const newNode = new node(data)
      if(!this.head){
           this.head = newNode
      }
      else{
      newNode.next = this.head
      this.head = newNode
      }
      
  }
  appendToEnd(data){
    const newNodes = new node(data)
      let curr = this.head
      while(curr.next){
        curr = curr.next
      }
    curr.next = newNodes
}
print(){
    let value = " "
    let curr = this.head
    while(curr){
        value += `${curr.data} `
        curr = curr.next
    }
    console.log(value)
}
printReverse(){
    let value = " "
    let curr = this.head
    while(curr){
        value += `${curr.data} `
        curr = curr.next

    }
    let result = value.split('').reverse().join("")
    console.log(result)
}
}


let list = new linkedlist()
list.append(9)
list.appendToEnd(5)

list.print()
list.printReverse()
