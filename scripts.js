
let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = null;

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = null;
    display.innerText = '0';
}

function appendValue(value) {
    currentInput += value;
    display.innerText = currentInput;
}

function appendOperator(op) {
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else {
        calculate();
    }
    operator = op;
    currentInput += ' ' + op + ' ';
    display.innerText = currentInput;
}

function calculate() {
    const parts = currentInput.split(' ');
    if (parts.length !== 3) return; 
    
    firstOperand = parseFloat(parts[0]);
    const secondOperand = parseFloat(parts[2]);
    const operator = parts[1];
    let result;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    
    display.innerText = result;
    firstOperand = result;
    currentInput = result.toString();
    operator = '';
}
