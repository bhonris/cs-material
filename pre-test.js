// BASIC

// Problem 1
// Sum all numbers from 1 to 100
// IE 1 + 2 + 3 + ... + 99 + 100 = ?
function getSumTo100(){
  return -1
}


// Problem 2
// getSumToN(n: number) => number
// Sum all numbers from 1 to n
function getSumToN(n){
  return -1
}
// Example
// getSumToN(4) = 1 + 2 + 3 + 4 = 10
// getSumToN(10) = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55


// Problem 3  
// getFizzBuzzNumber(num: number) => string
// if num is divisible by 3, output "fizz"
// if num is divisible by 5, output "buzz"
// if num is divisible by 3 and 5, output "fizzbuzz"
// else, output the original number as a string
function getFizzBuzzNumber(num){
  if(num % 3 === 0 && num % 5 === 0) return "fizzbuzz"
  if(num % 3 === 0) return "fizz"
  if(num % 5 === 0) return "buzz"
  return num+""
}
// Example
// getFizzBuzzNumber(1) => "1"
// getFizzBuzzNumber(3) => "fizz"
// getFizzBuzzNumber(5) => "buzz"
// getFizzBuzzNumber(30) => "fizzbuzz"


// Problem 4
// getFizzBuzzList(num: number) => Array<string>
// Takes in a number and returns an array of numbers 1 to num
// where numbers divisible by 3 is replaced with "fizz",
// numbers divisible by 5 is replaced with "buzz"
// and numbers divisible by 3 and 5 is replaced by "fizzbuzz" 
function getFizzBuzzList(num){
  const array = new Array(num).fill(null);
  const newArray = array.map((e,index) => index + 1)
  return newArray.map(getFizzBuzzNumber)
}
console.log(getFizzBuzzList(10))
// Example:
// getFizzBuzzList(4) => [1,2,fizz,4]
// getFizzBuzzList(10) => [1,2,fizz,4,buzz,fizz,7,8,fizz,buzz]


// INTERMEDIATE

// Problem 5
// getEvenNumbers(numArray: Array<number>) => Array<number>
// consumes a list, and returns a list containing only the even numbers in the consumed list
function getEvenNumbers(numArray){
  return []
}
// Example:
// getEvenNumbers([12,5,7,2,7,8]) => [12,2,8]
// getEvenNumbers([1,3,5]) => []
// getEvenNumbers([2,4,8]) => [2,4,8]


// Problem 6
// isPalindrome(word: string) => boolean
// Write a function that takes in a string, and returns true or false depending on whether the word
// is a palindrome or not
// a palindrome is defined as a word that reads the same backward as forward
// for example,
// the word "cat" backwards is "tac", not a palindrome
// the word "comet" backwards is "temoc", not a palindrome
// the word "racecar" backwards is "racecar", this IS a palindrome
function isPalindrome(word){
  return false
}
// Example:
// isPalindrome(cat) => false
// isPalindrome(comet) => false
// isPalindrome(racecar) => true


// Problem 7
// getFibonacciN(num: number) => number
// the Fibonacci Sequence is a famouse number sequence, where the value of a number in the
// sequence is defined as the sum of the two previous numbers, starting with 0 and 1 so,
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
// write a function that will return the value of the fibonacci sequence at element num
// use 0-indexing
function getFibonacciN(num){
  if(num === 0) return 0
  if(num === 1) return 1
  return getFibonacciN(num-1) + getFibonacciN(num-2)
}
console.log(getFibonacciN(8))
// Example
// getFibonacci(0) => 0
// getFibonacci(6) => 8
// getFibonacci(8) => 21

// ADVANCE

// Problem 8
// Two Sum
// Given an array of integers `nums` and an integer `target`, return indices of
// the two numbers such that they add up to `target`
// You may assume that each input would have exactly one solution
const twoSum = function (nums, target){
  return [-1,-1]
}
// twoSum([2,7,11,15], 9) => [0,1]
// twoSum([3,2,4], 6) => [1,2]
// twoSum([4,8,1,6,3], 14) => [1,3]

// Problem 9
// The following exists as denomiation of the Thai baht:
// 1b, 2b, 5b, 10b, 20b, 50b
// How many different ways are there to sum a total of 50 baht?
function getNumberOfVariations(){
  const sum = 50
  const denominations = [1,2,5,10,20,50]
  // ...
  return -1
}
// EXAMPLE: 10x1b + 5x2b + 2x5b + 2x10b = 50b
// HINT: Use recursion
