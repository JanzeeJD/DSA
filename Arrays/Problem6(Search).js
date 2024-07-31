// search an elment's index position

function searchElement(arr,n){
  for(let i=0;i<arr.length;i++){
    if(arr[i]=== n){
      return i
    }
  }                                                      
   return -1
  }



let arr = ["j","k",3,4,2,6]
let n = 3
let result = searchElement(arr,n)
if(result !== -1){
console.log("The index position of element is:", result);
} else{
  console.log("the element doesn't exists")
}
