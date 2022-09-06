'use strict';
let operandA = getNumber('Put OperandA?');


let operandB = getNumber('Put OperandB?');


let action = getAction();


let result = calculate(operandA, operandB, action);


showResult(operandA, operandB, action, result);

// ==========
function getNumber(title) {
    let operand = prompt(title);

    while (isNumberInvalid(operand)) {
        operand = prompt(title);
    }

    return +operand;
}

function isNumberInvalid(operand) {
    return operand === null || operand.trim() === '' || isNaN(operand);
}

function getAction() {
    let action = prompt('Action?');

    while (isActionInvalid(action)) {
        action = prompt('Action?');
    }

    return action;
}

function isActionInvalid(action) {
    return action !== '+' && action !== '-' && action !== '*' && action !== '/';
}

function calculate(a, b, action) {
    switch (action) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            alert('Something wrong');
    }
}

function showResult(a, b, action, result) {
    alert(`${a} ${action} ${b} = ${result}`);
}
