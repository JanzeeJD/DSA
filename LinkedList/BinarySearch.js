let arr =[7,6,4,0,-1]

function binarySearch (arr,target,left=0,right=arr.length-1){
  let mid = Math.floor((left+right)/2)
  if(right<left) return 
  if(arr[mid]===target){
    return mid
  }
  if(arr[mid]<target){
    return binarySearch(arr,target,left,mid-1)
  }
  if(arr[mid]>target){
    return binarySearch(arr,target,mid+1,right)
  }
}

console.log(binarySearch(arr,6))
