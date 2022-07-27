console.log("Hello World")


// There are three types of primitives in TypeScript
// 1. number
// 2. string
// 3. boolean

// Declaring Variables
const a: number = 1
const b: string = "Hello"
const c: boolean = false
// You don't have to specify the type for primitives :)

// With functions
function add(a: number, b: number): number {
    return a + b
}

const add2 = (a: number, b: number): number => {
    return a + b
}


// Give this function the type for the parameter and return type
function isEvenSum(a, b) {
    return a + b % 2 === 0
}


// Generics
function identity1(arg) {
    return arg
}
function identity2<Type>(arg: Type): Type {
    return arg
}

class CustomArray {
    array: number[] = []
    add(item: number) {
        this.array.push(item)
    }
    get(index: number) {
        return this.array[index]
    }
}

class CustomArrayT<Type> {
    array: Type[] = []
    add(item: Type) {
        this.array.push(item)
    }
    get(index: number) {
        return this.array[index]
    }
}

// you can have multiple generics in a function
interface TwoArray<T1, T2> {
    array1: T1[]
    array2: T2[]
}

function manipulateAnimal1(animal: { name: string, legs: number, hasTail: boolean }) {
    return animal.name
}

function manipulateAnimal2(animal: Animal) {
    return animal.name
}

interface Animal {
    name: string
    legs: 4
    hasTail: boolean
}

interface Dog extends Animal {
    breed: string
}

// Add example




// When you need dynamic keys
type PartNo = "a1" | "b2" | "c3"

type PartInfo = {
    quantity: number
    material: "metal" | "plastic"
}

type Parts = {
    [partNo in PartNo]: PartInfo
}



// Partials
interface Todo {
    title: string;
    description: string;
  }
   
  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
  }
   
  const todo1 = {
    title: "organize desk",
    description: "clear clutter",
  };
   
  const todo2 = updateTodo(todo1, {
    description: "throw out trash",
  });





function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
  }
   
  let x = { a: 1, b: 2, c: 3, d: 4 };
   
  getProperty(x, "a");
//   getProperty(x, "m"); This one is error


type Point = { x: number; y: number };
type P = keyof Point;
 

// TODO fix this so that it shows up as error
const myCanvas = document.getElementById("main_canvas");
console.log(typeof myCanvas)
function doSometingWithCanvas(canvas: HTMLCanvasElement) {
    canvas.width = 100;
    canvas.height = 100;
}

// Using unknown for casting purposes
const aa = ("" as unknown) as HTMLCanvasElement;


function doSomething(x: string | null) {
    if (x === null) {
      // do nothing
    } else {
      console.log("Hello, " + x.toUpperCase());
    }
  }

  function liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed());
  }