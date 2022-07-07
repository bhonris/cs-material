// Fibonacci Sequence
// 1,1,2,3,5,8,13,21,34,55,89,...
// Mathematical Equation: ?
// In terms of CS
// Base Case:
// Recursive Function:
// calculateFibonacci(n: number) => number
function calculateFibonacci(n) {
  return -1
}


// Factorial
// calculateFactorial(n: number) => number
// n! = n x (n-1) x (n-2) ... 3 x 2 x 1 = n x (n-1)!
// base case:
// factorial function:
function calculateFactorial(n) {
  return -1
}

// Dynamic Programming 
// TODO:
//  * implement dynamic programming solution for Fibonacci
//  * console.time to time the different in time

// Problems 

// 1. Find the cycle length for a given n in the Collatz Conjecture using recursion
// https://en.wikipedia.org/wiki/Collatz_conjecture 
// Example:
// 5 -> 8 -> 4 -> 2 -> 1, so length == 5
// 14 -> 7 -> 11 -> 17 -> 26 -> 13 -> 40 -> 20 -> 10 -> 5 -> 8 -> 4 -> 2 -> 1, so length == 15

// 2. Design a solution for the Hofstadter Female and Male Sequence problem using Mutual Recursion
// F ( 0 ) = 1
// M ( 0 ) = 0 
// F ( n ) = n - M ( F ( n - 1 ) ), n > 0 
// M ( n ) = n - F ( M ( n - 1 ) ), n > 0. 

// 3. Print all combinations of numbers from 1 to `n` having sum `n`
// getCombinations(n: number) => number
function getCombinations(n) {
  return -1
}
// For n = 5, the following combinations are possible:
// { 5 }
// { 1, 4 }
// { 2, 3 }
// { 1, 1, 3 }
// { 1, 2, 2 }
// { 1, 1, 1, 2 }
// { 1, 1, 1, 1, 1 } 7 different combinations
// So getCombinations(5) => 7