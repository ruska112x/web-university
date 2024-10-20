let display = document.getElementById('display');
let expression = '';

function appendNumber(number) {
    expression += number;
    display.value = expression;
}

function appendOperator(operator) {
    expression += operator;
    display.value = expression;
}

function appendDot() {
    if (!expression.includes('.')) {
        expression += '.';
        display.value = expression;
    }
}

function appendConstant(constant) {
    if (constant === 'pi') {
        expression += Math.PI;
    } else if (constant === 'e') {
        expression += Math.E;
    }
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

function calculateSquareRoot() {
    expression += '**(1/2)';
    display.value = expression;
}

function calculateSquare() {
    expression += '**2';
    display.value = expression;
}

function calculatePower() {
    expression += '**';
    display.value = expression;
}

function calculateNthRoot() {
    expression += '**(1/';
    display.value = expression;
}

function calculateTrig(func) {
    if (func === 'sin') {
        expression = Math.sin(eval(expression));
    } else if (func === 'cos') {
        expression = Math.cos(eval(expression));
    } else if (func === 'tan') {
        expression = Math.tan(eval(expression));
    }
    display.value = expression;
    expression = '';
}

function calculate() {
    try {
        expression = eval(expression);
        display.value = expression;
    } catch (error) {
        display.value = 'Ошибка';
        expression = '';
    }
}
