// @ts-nocheck
console.log("Hello World");

// Basics
const var1 = 1;
const var2 = "hello";
const var3 = false;

function add(a, b) {
  return a + b;
}

function isEvenSum(a, b) {
  return (a + b) % 2 === 0;
}

// Intermediate
const dog = {
  name: "jack",
  color: "black",
  eatMeat: true,
  legs: 4,
  hasTail: true,
};

const cow = {
  name: "joe",
  color: "brown",
  eatMeat: false,
  legs: 4,
  hasTail: true,
};

const fish = {
  name: "sally",
  color: "gold",
  eatMeat: true,
  legs: false,
};

function hasTailAndLegs(animal) {
  return animal.hasTail && animal.legs > 0;
}

function updateAnimal(animal, fields) {
  return { ...animal, ...fields };
}

// Generics
function identity(arg) {
  return arg;
}

class CustomArray<number> {
  array: number[] = [];
  add(item: number) {
    this.array.push(item);
  }
  get(index: number) {
    return this.array1[index];
  }
}

const newArray = new CustomArray();
newArray.add1("3");
console.log(newArray);

// Keyof
function getProperty<Type>(obj: Type, key: any) {
  return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
