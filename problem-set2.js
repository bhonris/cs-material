// sameNumChar(aStr: string): boolean
// returns true if there are the same number of all the different characters in the string
// else returns false
function sameNumChar(aStr){
  const dict = {}
  for (let index = 0; index < aStr.length; index++) {
    const el = aStr[index];
    dict[el] = (dict[el] || 0) + 1

  }
  const num = dict[aStr[0]]
  for(let key of Object.keys(dict)){
    if(dict[key] !== num) return false
  }
  return true
} 
console.log(sameNumChar("aabbccdd"))
// Examples
// sameNumChar("aabbccdd") => true  (a: 2, b: 2, c: 2, d: 2)
// sameNumChar("aacbd") => false (a: 2, c: 1, b: 1, d: 1)
// sameNumChar("abab") => true (a:2, b:2)