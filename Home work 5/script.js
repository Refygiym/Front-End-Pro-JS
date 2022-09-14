// 1. Спрашиваем дейтсвие + - / * // +
// 1.1 Валидируем
// 2. Спросить у пользователя операнды через , // 2,356,6,7,8
// 2.1 Валидируем null, '',
// Выводим результат одним числом

const action = getAction();
const operands = getOperands();
const result = calculateResult(operands, action);
showResult(result);


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

function getOperands() {
    let operands;
    do {
        operands = getAnswer().split(',').map(Number); // [2,3,NaN]
    } while (operands.findIndex((item) => isNaN(item)) !== -1);  return operands;
}

function getAnswer() {
    let answer = prompt('Operands?');

    while (isOperandsAnswerInvalid(answer)) {
        answer = prompt('Operands?');
    }

    return answer;
}

function isOperandsAnswerInvalid(val) {
    return val === null || val.trim() === '';
}

function calculateResult(values, operator) { return values.reduce((acc, item) => calculate(acc, item, operator));
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

function showResult(value) {
    console.log('Result: ' + value);
}