//*Basics
//TODO: 1. Number type; 2. String type; 3. Boolean Type

//*Number Type
let num: number = 5;
//! We cannot assign other type to this vaiable: num = '5'; //Error

const add = (num1: number, num2: number) => {
  return num1 + num2;
};

//! In all variables we can assign only one type unless it is any type or union type

//*String Type
const greet = (name: string) => {
  return 'Hello ' + name;
};

//*Boolean Type
const isOdd: boolean = true;

console.log(add(5, 10));
console.log(greet('John'));
