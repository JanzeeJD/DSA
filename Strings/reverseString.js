// Reverse a string using recursion
function reverseString(str){
  if(str.length <=1){
    return str
  }
return str[str.length-1]+reverseString(str.substring(0,str.length-1));
}

const str = "Jancy"
console.log(reverseString(str));

 /* 
 1. 5<=1 no. So, str[4] + reverseString(str.substring(0,4)) => "y" + "Janc"
 2. 4<=1 no. So, Str[3] + reverseString(str.substring(0,3)) => "y" + "c" + "Jan"
 3. 3<=1 no. So, str[2] + reverseString(str.substring(0,2)) => "y" + "c" + "n" + "Ja"
 4. 2<=1 no. So, str[1] + reverseString(str.substring(0,1)) => "y" + "c" + "n" + "a" + "J"
 5. 1<=1 yes. So, return Str => "ycnaJ" 
 */
