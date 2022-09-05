
// Сумма четных: 30
// Сумма нечетных: 25

const maxNumber = getNumber();
const { odd, even } = getSums(maxNumber);


showResult(odd, even);

function getNumber() {
    let num = prompt('Put number');

    while (isNumberInvalid(num)) {
        num = prompt('Put number. Try again');
    }

    return +num;
}

function isNumberInvalid(val) {
    return val === null || val.trim() === '' || isNaN(val) || val <= 0;
}

function getSums(maxNumber) {
    const result = {
        odd: 0,
        even: 0,
    };

    for (i = 1; i <= maxNumber; i++) {
        if (i % 2 === 0) {
            result.odd += i;
        } else {
            result.even += i;
        }
    }

    return result;
}



function showResult(odd, even) {
    console.log(`
        Odd sum: ${odd}
        Even sum: ${even}
    `);
}