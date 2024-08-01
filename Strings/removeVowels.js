// method 1
let str = "Jancy Danieeeeel"
function removeVowels(str){
  let vowels = "aeiouAEIOU"
  let result = ""
  for(let i=0;i<str.length;i++){
    if(!vowels.includes(str[i])){
      result += str[i]
    }
  }
  return result
}
console.log(removeVowels(str));

//method 2
let str2 = "aabbcdefgh"
function removeVowel(str){
  return str.replace(/[aeiouAEIOU]/g,'')
}

console.log(removeVowel(str2))