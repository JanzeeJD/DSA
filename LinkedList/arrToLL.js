class listNode {
  constructor(data){
    this.data = data;
    this.next = null
  }
}

function arrayToLL(arr){
  if(!arr.length) return null;
  let head = new listNode(arr[0]);
  let current = head

  for(let i=1;i<arr.length;i++){
    current.next = new listNode(arr[i])
    current = current.next
  }
  return head;
}

let arr = [2,4,6,8,10]
let linkedList = arrayToLL(arr)

function printLinkedList(head){
  let value = ""
  let current = head
  while(current){
    value += `${current.data} => `
    current = current.next
  }
  console.log(value + "Null")
}

printLinkedList(linkedList)

