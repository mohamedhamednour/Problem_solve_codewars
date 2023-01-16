// Complete the solution so that it reverses all of the words within the string passed in.

// Example:

// reverseWords("The greatest victory is that which requires no battle") // should return "battle no requires which that is victory greatest The"


word = "The greatest victory is that which requires no battle"


function reverseWords(str){
  let reverse =  str.trim().split(' ').reverse().join(' ')
  

  return reverse; 
}

console.log(reverseWords(word))