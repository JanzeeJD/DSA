// reverse using another array
function reverseArray(arr){
  let result = []
  for(let i=arr.length-1;i>=0;i--){
    result.push(arr[i])
  }
  return result;
}

let arr = [2,4,6,8,10]
console.log(reverseArray(arr));

//using inbuilt method
console.log(arr.reverse())