//*Objs-arrays-tuples-enums

const person = {
  name: 'Maximilian',
  age: 30,
}; //*These are object types, but we can also define a type for an object check below:

const person2: {
  name: string;
  age: number;
} = {
  name: 'John',
  age: 30,
}; //*This is how we define a type for an object

//*Arrays
const arr = ['John', 'Doe', 'Max']; //*This is an array of strings, if you mouse over to the array variable you will see that it is of type string[]
//Now lets define a type for the array
const arr2: string[] = ['John', 'Doe', 'Max']; //*This is how we define a type for an array
const arr3: number[] = [1, 2, 3]; //*This is an array of numbers
const arr5: boolean[] = [true, false, true]; //*This is an array of booleans

//*Tuples
const tuple: [string, number] = ['John', 30]; //*This is a tuple, it is an array with fixed length and fixed type
//!in tuples the order of the type is important, if you change the order of the types in the tuple it will throw an error

//*Enums
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
} //*This is an enum, it is a custom type that we can define, it is a list of key-value pairs
//enums are used to assign labels to numbers, it is a way to make numbers more expressive and readable
//if we don't assign a value to an enum key, it will automatically assign a value starting from 0
//if we assign a value to an enum key, it will start from that value and increment by 1
const person3 = {
  name: 'John',
  age: 30,
  role: Role.ADMIN, //*This is how we assign an enum value to a variable
};

console.log(person3.role); //*This will log 0, because the value of ADMIN is 0
