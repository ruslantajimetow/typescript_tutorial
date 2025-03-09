var button = document.querySelector('button'); // type casting using 'as' keyword
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
//type number we are applying for both input1 and input2
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    //Here we have to convert input values to numbers coz by default they are string
    console.log(add(Number(input1.value), Number(input2.value)));
});
