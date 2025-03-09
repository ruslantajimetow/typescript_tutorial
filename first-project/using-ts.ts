const button = document.querySelector('button') as HTMLButtonElement; // type casting using 'as' keyword
const input1 = document.getElementById('num1') as HTMLInputElement;
const input2 = document.getElementById('num2') as HTMLInputElement;

//type number we are applying for both input1 and input2
function add(num1: number, num2: number): number {
  return num1 + num2;
}

button.addEventListener('click', function () {
  //Here we have to convert input values to numbers coz by default they are string
  console.log(add(Number(input1.value), Number(input2.value)));
});
