// Revise linked list
//1=>Create linkedlist
//2=> Print the list
//3=> See the out
//4=> Happy 😊
//5=>Reverse the list

class node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}
// we create a template for linkedlist

// first model from this template
class linkedlist{
  constructor(){
    this.head = null;
  }

  // create a list
  add(data){
    const newNode = new node(data)
    if(!this.head){
      this.head = newNode;
    }else{
      let curr = this.head;
      while(curr.next){
        curr = curr.next
      }
      curr.next = newNode;
    }
  }
  //see the list
  print(){
    let output = ""
    let current = this.head
    while(current){
      output += `${current.data} =>`
      current = current.next;
    }
    console.log(output +"Null")
  }
reverse(){
  let curr = this.head;
  let prev = null
  while(curr){
    let temp = curr.next //this.head next "A"
    curr.next = prev // now J=> null
    prev = curr // null poyi this.head ayi
    curr = temp // A is curr 
  }
  this.head = prev // bcz now curr is in prev
}
}

let names = new linkedlist()
names.add("J")
names.add("A")
names.add("Y")
names.add("A")
names.add("Y")
names.print()
names.reverse()
names.print()