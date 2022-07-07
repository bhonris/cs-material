// Fibonacci Sequence
// 1,1,2,3,5,8,13,21,34,55,89,...
// Mathematical Equation: ?
// In terms of CS
// Base Case: 
// n=0 => 1
// n=1 => 1
// Recursive Function:
// f(n) = f(n-1) + f(n-2)  
// calculateFibonacci(n: number) => number
function calculateFibonacci(n){
  if(n===0 || n===1){
    return 1
  }
  return calculateFibonacci(n-1) + calculateFibonacci(n-2)
}

function calculateFibonacciDP(n, memo={}){
  if(n===0 || n===1){
    return 1
  }
  if(memo[n]) return memo[n]
  const value = calculateFibonacciDP(n-1, memo) + calculateFibonacciDP(n-2, memo)
  memo[n] = value
  return value
}
// for(let i = 0; i < 8; i++){
//   console.log(calculateFibonacci(i))
// }
//                    f(5)
//         f(4)                   f(3)
//      f(3)     f(2)       
//   f(2) f(1)   
// f(1) f(0)

// Factorial
// calculateFactorial(n: number) => number
// n! = n x (n-1) x (n-2) ... 3 x 2 x 1 = n x (n-1)!
// base case:
// n=1 => 1
// recursive function:
// f(n) = n!
// f(n) = n x f(n-1)
function calculateFactorial(n) {
  if(n===1){
    return 1
  }
  return n*calculateFactorial(n-1)
}

function lolFunction(n){
  if(n === 1 || n === 0 || n==2) return n
  return lolFunction(n-1) + 2*lolFunction(n-3)
}
// console.time("Time1")
// console.log(lolFunction(60))
// console.timeEnd("Time1")
// Dynamic Programming 
// TODO:
//  * implement dynamic programming solution for Fibonacci
//  * console.time to time the different in time

// Problems 

// 1. Find the cycle length for a given n in the Collatz Conjecture using recursion
// https://en.wikipedia.org/wiki/Collatz_conjecture 
// Example:
// 5 -> 8 -> 4 -> 2 -> 1, so length == 5
// 14 -> 7 -> 11 -> 17 -> 26 -> 13 -> 20 -> 10 -> 5 -> 8 -> 4 -> 2 -> 1, so length == 13

// 2. Design a solution for the Hofstadter Female and Male Sequence problem using Mutual Recursion
// F ( 0 ) = 1
// M ( 0 ) = 0 
// F ( n ) = n - M ( F ( n - 1 ) ), n > 0 
// M ( n ) = n - F ( M ( n - 1 ) ), n > 0. 

// 3. Print all combinations of numbers from 1 to `n` having sum `n`
// getCombinations(n: number) => number
function getCombinations(n) {
  if(n === 0){
    return []
  }
  if(n === 1){
    return [[1]]
  }
  const allCombinations = []
  for (let i = 1; i <= n; i++) { 
    const combinations = getCombinations(n-i)
    const newCombination = combinations.map(e => [i, ...e])
    newCombination.forEach(e => allCombinations.push(e))
  }
  allCombinations.push([n])
  return allCombinations
}
console.log(getCombinations(4))
// getCombinations(5)
//     getCombinations(4)
// 1   1 1 1 1 
// 1   1 1 2
// 1   2 2
// 1   3 1
// 1   4

//     getCombinations(3)
// 2   1 1 1
// 2   1 2
// 2   3

//     getCombinations(2)
// 3   1 1
// 3   2

//     getCombinations(1)
// 4   1


// For n = 5, the following combinations are possible:
// { 5 }
// { 1, 4 }
// { 2, 3 }
// { 1, 1, 3 }
// { 1, 2, 2 }
// { 1, 1, 1, 2 }
// { 1, 1, 1, 1, 1 } 7 different combinations
// So getCombinations(5) => 7