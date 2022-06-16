// getEvenNumbers(numArray: Array<number>) => Array<number>
// consumes a list, and returns a list containing only the even numbers in the consumed list
function getEvenNumbers(numArray){
  function isEven(num){
    return num%2 === 0
  }
  return numArray.filter(isEven)
}
// console.log(getEvenNumbers([12,5,7,2,7,8]))
// Example:
// getEvenNumbers([12,5,7,2,7,8]) => [12,2,8]
// getEvenNumbers([1,3,5]) => []
// getEvenNumbers([2,4,8]) => [2,4,8]


// doubleNumbers(numArray: Array<number>) => Array<number>
// consumes a list, and returns a list which doubles all the original value
function doubleNumbers(numArray){
  function doubleNumber(num){
    return num*2
  }
  return numArray.map(doubleNumber)
}
// console.log(doubleNumbers([1,3,5]));
// Example:
// doubleNumbers([1,3,5]) => [2,6,10]
// doubleNumbers([2,4,8]) => [4,8,16]


// sumNumbers(numArray: Array<number>) => number
// consumes a list, returns the sum of the entire list
function sumNumbers(numArray){
  function summer(accumulator, current){
    return accumulator + current
  }
  return numArray.reduce(summer, 0)
}
// console.log(sumNumbers([1,2,3,4]))
// Example:
// getEvenNumbers([1,3,5]) => 9
// getEvenNumbers([2,4,8]) => 28




// Assignment

// consumes a list of number representing indexes, returns the fibonacci number representing that index
function getFibonacciOfIndex(indexArray){
  function getFibonacciN(num){
    if(num === 0) return 0
    if(num === 1) return 1
    return getFibonacciN(num-1) + getFibonacciN(num-2)
  }
  return indexArray.map(getFibonacciN)
}
// Example 
// console.log(getFibonacciOfIndex([0,8,6])) // => [0,21,8]

// getNameOfExpensiveFruit(costThreshold: number) => Array<string>
// consumes a list, and returns a list of name of fruits that exceed or is equal to price threshold
function getNameOfExpensiveFruit(costThreshold){
  const FRUIT = [
    {name: "apple", cost: 10},
    {name: "pear", cost: 20},
    {name: "banana", cost: 30},
    {name: "", cost: -1} 
  ]
  function filterFruit(fruit){
    return fruit.cost >= costThreshold
  }
  function mapName(fruit){
    return fruit.name
  }
  const filteredList = FRUIT.filter(filterFruit)
  return filteredList.map(mapName)
}
console.log(getNameOfExpensiveFruit(15));
// Example:
// getNameOfExpensiveFruit(15) => ["pear", "banana"]
// getNameOfExpensiveFruit(30) => ["banana"]
// getNameOfExpensiveFruit(50) => []

// getMin(anArray: Array<number>) => number
// Consumes a list of number. returns the smallest number
function getMin(anArray) {
  function calculateMin(accum, curr){
    return curr < accum ? curr: accum
  }
  return anArray.reduce(calculateMin)
}
// Example:
console.log(getMin([-1,5,7,-3, 2, 5]))// => -1