// Warm Up: map, filter, reduce 
//What does JSON stand for


// MAIN
const personData = {
  firstName: "john",
  lastname: "doe",
  age: 20,
  address: "1234 street",
  country: "thailand",
  zipCode: 10230
}

// Extract country
// getFullName(personObj: Object) => string
function getCountry(perrsonObj){
  return ""
}

// getFullName(personObj: Object) => Object
// gets json object containing only first name and last name of personObj
function getFullName(personObj){
  return {}
}
// Example: getFullName(personData) => { firstName: "john", lastName: "doe"}

// removeAge(personObj: Object) => Object
function removeAge(personObj){
  return {}
}
// Example: removeAge(personData) => 
//  { firstName: "john", lastName: "doe",
//    address: "1234 street", country: "thailand",
//    zipCode: 10230 }



// Combining Objects
const obj1 = {
  a: 1,
  b: 2
}
const obj2 = {
  c: 3,
  d: 4
}
// combineOutput
// combineOutput(a: object, b: object) => object
function combineOutput(a,b){
  return {}
}
// Desired Result:
// combineOutput(obj1,obj2) = {
//   a: 1, 
//   b: 2,
//   c: 3,
//   d: 4
// }


const dog = {
  name: "Fido",
  age: 4,
  legs: 4,
  owner: undefined
}
// Does this make sense:
const { owner: aVar = "unknown" } = dog
// Converting String to Number and Number to String

// Console Logging Tricks
// ${}
const quantity = 3
const fruit = "apples"
// logQuantityAndName(name: string, quant: number) => void
function logQuantityAndName(name, quant){
  console.log("")
  return
}
// logQuantityAndName(fruit, quantity) => void
// Desired Console.log: There are 3 apples

// Table
const tableData = [
  {name:"a", quantity:3},
  {name:"b", quantity:13},
  {name:"c", quantity:2},
  {name:"d", quantity:8}
]

// Problem Sets
// Problem 1
// Separate out this person into 
// var1: first, last
// var2: country, city, twitter
// From var1 and var2, create var3 with
// last, country, twitter
// recombineData(pData: object) => object
const personData2 = {
  first: 'Wes',
  last: 'Bos',
  country: 'Canada',
  city: 'Hamilton',
  twitter: '@wesbos'
};
// separateData(pData: object) => void
function separateData(pData){
  const var1 = {}
  const var2 = {}
  const var3 = {}
  console.log("")
  console.log("")
  console.log("")
  return
}
// separateData(personData2) => void
// Log => "fullname: {first: Wes, last: Bos}"
// Log => "other info: {country: 'Canada', city: 'Hamilton', twitter: '@wesbos'}"
// Log => "other info: {country: 'Canada', city: 'Hamilton', twitter: '@wesbos'}"

// Problem 2
const x = false
// Sub problem a
// Simplify this statement into 1 line
var result
if(x){
  result = x
} else {
  result = 5
}

// Sub problem b
// Simplify this statement to 1 line
if(x){
  console.log("x is true")
} else {
  console.log("x is false")
}

// Problem 3
const objArr = [
  {name:"a", quantity:3, isReady: "yes"},
  {name:"b", quantity:13, isReady: "yes"},
  {name:"c", quantity:2, isReady: "yes"},
  {name:"d", quantity:8, isReady: "no"}
]
const processedObjArr = {} // fill here
const totalSum = -1 // fill here
// Filter out objs where isReady === "yes"
// add "-approved" to name
// get sum of quantity
// remove isReady field from each object
// Expected Result
// objArr = [
//  {name:"a-approved", quantity:3},
//  {name:"b-approved", quantity:13},
//  {name:"c-approved", quantity:2},
// ]
// totalSum = 18

// Bonus
// write a code to generate binary number from decimal numbers
// function getBinaryNumber(num: number) => string
function getBinaryNumber(num){
  return ""
}
// 4 => "100"
// 7 => "111"
// 54 => "110110"