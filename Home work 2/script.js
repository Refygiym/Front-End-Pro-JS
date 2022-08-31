'use strict';


let A;
do{
    A = prompt('Enter first number');
}while (isOperandInvalid(A));
function isOperandInvalid(val) {
    return val === null || val === '';
}
let B = prompt('Enter second number');
while (B === null || B === '') {
    B = prompt('Enter second number again')
}
let result;
let operator;
do{
    operator = prompt('Enter operator (+, -, *, /)');
}while (isNaN(operator));
function isNaN(val) {
    return val === undefined  || val === '';
}

switch (operator) {
    case '+':result = (Number (A) + Number(B)); break;
    case '-':result = A - B; break;
    case '*':result = A * B; break;
    case '/':result = A / B; break;
}
alert(A + operator + B + '=' + result);



