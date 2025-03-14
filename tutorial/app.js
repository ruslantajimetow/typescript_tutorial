//* Union types and Type aliases and Literal types
//*Union types
//Union types allow us to combine multiple types in one type
//We can use the pipe operator | to combine types
var combine = function (input1, input2) {
    var result;
    // !We need to check types before we can perform operations on them, because in each input we have 2 types assigned
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
var combinedAges = combine(30, 26);
console.log(combinedAges);
var combine2 = function (input1, input2) {
    //*We can use the Combinable type alias to define the types of the inputs
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
var ten = 10; //!if we assign a value other than 10 or 'john' it will throw an error
var john = 'john';
