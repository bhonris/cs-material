// Problem 1
// Use method chaining to 
// FILTER the list for only even numbers
// MAP the results by dividing the number by two
// sort
const x = [1,5,7,8,,3,6,12,4,9]
function methodChainArray(arr) {
}
// Eg methodChainArray(x) => [2,3,4,6]

function addTwo(num) {
  return new Promise(res => {
    setTimeout(()=>{
      res(num+2)
    }, 0)
  })
}

function multiplyTwo(num) {
  return new Promise(res => {
    setTimeout(()=>{
      res(num*2)
    }, 0)
  })
}
// Problem 2 
function main(){
  // console log out the value 2*(x+2) by chaining promises with then
}
 
main()

// Problem 3 
async function  main2(){
  // console log out the value 2*(x+2) by using async await

}

main2()



// Problem 4
// Davis has a number of staircases in his house and he likes to climb each staircase , 1,2,3
// steps at a time. How many ways there are to reach the top of the staircase.
// Given the respective heights for each of the  staircases in his house, find and print the
//  number of ways he can climb each staircase.
// stepPerms(n: number) => number
function stepPerms(n){
}

// Example:
// stepPerms(4)
// 1 1 1 1
// 1 1 2
// 1 2 1
// 2 1 1
// 1 3
// 3 1
// 2 2
// So otuput is 7



