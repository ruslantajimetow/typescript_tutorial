//*Objs-arrays-tuples-enums
var person = {
    name: 'Maximilian',
    age: 30,
}; //*These are object types, but we can also define a type for an object check below:
var person2 = {
    name: 'John',
    age: 30,
}; //*This is how we define a type for an object
//*Arrays
var arr = ['John', 'Doe', 'Max']; //*This is an array of strings, if you mouse over to the array variable you will see that it is of type string[]
//Now lets define a type for the array
var arr2 = ['John', 'Doe', 'Max']; //*This is how we define a type for an array
var arr3 = [1, 2, 3]; //*This is an array of numbers
var arr5 = [true, false, true]; //*This is an array of booleans
//*Tuples
var tuple = ['John', 30]; //*This is a tuple, it is an array with fixed length and fixed type
//!in tuples the order of the type is important, if you change the order of the types in the tuple it will throw an error
//*Enums
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {})); //*This is an enum, it is a custom type that we can define, it is a list of key-value pairs
//enums are used to assign labels to numbers, it is a way to make numbers more expressive and readable
//if we don't assign a value to an enum key, it will automatically assign a value starting from 0
//if we assign a value to an enum key, it will start from that value and increment by 1
var person3 = {
    name: 'John',
    age: 30,
    role: Role.ADMIN, //*This is how we assign an enum value to a variable
};
console.log(person3.role); //*This will log 0, because the value of ADMIN is 0
