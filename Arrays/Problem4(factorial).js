// find factorial of the number - Big O = O(n)
// factorial(4) = 4*3*2*1 
// factorial(5) = 5*4*3*2*1

function factorial(n){
  let result = 1
  for(let i=2;i<=n;i++){
    result = result *i
  }
  return result
}

console.log(factorial(4)) // 720
console.log(factorial(5)); //120
