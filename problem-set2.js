// sameNumChar(aStr: string): boolean
// returns true if there are the same number of all the different characters in the string
// else returns false
function sameNumChar(aStr){
  return false
} 
console.log(sameNumChar("aabbccdd"))
// Examples
// sameNumChar("aabbccdd") => true  (a: 2, b: 2, c: 2, d: 2)
// sameNumChar("aacbd") => false (a: 2, c: 1, b: 1, d: 1)
// sameNumChar("abab") => true (a:2, b:2)