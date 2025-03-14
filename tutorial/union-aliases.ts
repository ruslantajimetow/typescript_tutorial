//* Union types and Type aliases and Literal types

//*Union types
//Union types allow us to combine multiple types in one type
//We can use the pipe operator | to combine types
const combine = (input1: number | string, input2: number | string) => {
  let result;
  // !We need to check types before we can perform operations on them, because in each input we have 2 types assigned
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

const combinedAges = combine(30, 26);
console.log(combinedAges);

//*Type aliases
//Type aliases allow us to create custom types
//We can use type keyword to create a type alias
type Combinable = number | string; //these are type aliases
const combine2 = (input1: Combinable, input2: Combinable) => {
  //*We can use the Combinable type alias to define the types of the inputs
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

//*literal types
//Literal types allow us to specify exact values that a variable can have
//We can use the pipe operator | to combine types
type Combinable2 = 10 | 'john'; //these are literal types
const ten: Combinable2 = 10; //!if we assign a value other than 10 or 'john' it will throw an error
const john: Combinable2 = 'john';
