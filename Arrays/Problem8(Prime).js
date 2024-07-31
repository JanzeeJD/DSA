// prime Number - Big O = O(n)
// prime(5) = 1*5 or 5*1 (true)

function isPrime(n){
  if(n < 2){
    return false
  }
  for(let i=2;i<n;i++){
    if(n%i===0){
      return false
    }
  }
  return true
}

console.log(isPrime(1)); //false
console.log(isPrime(5)); //true
console.log(isPrime(4));