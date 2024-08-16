// apply binary search on array = [2,3,5,7,8,9,10]
function binarySearchIncrease(arr,target){
  let left = 0;
  let right = arr.length-1;

  while(left<=right){
    // bcz left and right could point to the same element, < would miss it.
    let mid = left + Math.floor((right-left)/2)
    if(arr[mid]===target) {
    return mid
    }
    else if(arr[mid]>target){
      left =mid+1
    }else{
      right =mid-1
    }
  }
  return -1
}
let array = [7,6,4,0,-1]
console.log(binarySearchIncrease(array,-1));

