// Print all elements in an array
// write a function that iterates through an array and prints each elements

function printAllElements(array){
  for(let i=0;i<array.length;i++){
    console.log("The element of index " + i + " is " + array[i])
  }
}

let array = [10,20,30,40,50,60,70,80,90,100]
printAllElements(array)