console.log("Hello World");

// Basics
const var1 = 1;
const var2 = "hello";
const var3 = false;

function add(a: number, b: number): number {
  return a + b;
}

function isEvenSum(a: number, b: number): boolean {
  return (a + b) % 2 === 0;
}

const addAF = (a: number, b: number): number => {
  return a + b;
};

const isEvenSumAF = (a: number, b: number): boolean => {
  return (a + b) % 2 === 0;
};

type Color = "black" | "brown" | "gold";

interface IAnimal {
  name: string;
  color: Color;
  eatMeat: boolean;
  legs: number | boolean;
}

interface IMammal extends IAnimal {
  hasTail: boolean;
}

// Intermediate
const dog: IMammal = {
  name: "jack",
  color: "black",
  eatMeat: true,
  legs: 4,
  hasTail: true,
};

const cow: IMammal = {
  name: "joe",
  color: "brown",
  eatMeat: false,
  legs: 4,
  hasTail: true,
};

const fish: IAnimal = {
  name: "sally",
  color: "gold",
  eatMeat: true,
  legs: false,
};

function hasTailAndLegs(animal: IMammal) {
  return animal.hasTail && animal.legs > 0;
}

function updateAnimal(animal: IAnimal, fields: Partial<IAnimal>) {
  return { ...animal, ...fields };
}

updateAnimal(fish, { name: "john", color: "brown" });
updateAnimal(dog, { color: "brown", legs: 3 });

// Generics
function identity<Type>(arg: Type) {
  return arg;
}
console.log(identity<number>(3));
console.log(identity<number>(5));
console.log(identity<string>("asdf"));

class CustomArray<T1, T2> {
  array1: T1[] = [];
  array2: T2[] = [];
  add1(item: T1) {
    this.array1.push(item);
  }
  add2(item: T2) {
    this.array2.push(item);
  }
  get1(index: number): T1 {
    return this.array1[index];
  }
  get2(index: number): T2 {
    return this.array2[index];
  }
}

const newArray = new CustomArray<boolean, number>();
newArray.add1(false);
newArray.add2(3);
console.log(newArray);

interface INum {
  a: number;
  b: number;
  c: number;
  d: number;
}
// Keyof
function getProperty<Type>(obj: Type, key: keyof Type) {
  return obj[key];
}
let x1: INum = { a: 1, b: 2, c: 3, d: 4 };
getProperty<INum>(x1, "a");

// TODO fix this so that it shows up as error
const myCanvas: HTMLElement | null = document.getElementById("main_canvas");
console.log(typeof myCanvas);
function doSometingWithCanvas(canvas: HTMLCanvasElement) {
  canvas.width = 100;
  canvas.height = 100;
}
doSometingWithCanvas(myCanvas as any as HTMLCanvasElement);
