//*Basics
//TODO: 1. Number type; 2. String type; 3. Boolean Type
//*Number Type
var num = 5;
//! We cannot assign other type to this vaiable: num = '5'; //Error
var add = function (num1, num2) {
    return num1 + num2;
};
//! In all variables we can assign only one type unless it is any type or union type
//*String Type
var greet = function (name) {
    return 'Hello ' + name;
};
//*Boolean Type
var isOdd = true;
console.log(add(5, 10));
console.log(greet('John'));
