const add = function(a,b) {
    return a + b;
}

const subtract = function(a,b) {
    return a-b;
}

const multiply = function(a,b) {
    return a*b;
}

const divide = function(a,b) {
    return a/b;
}

const operate = function(operation,a,b) {
    switch (operation) {
        case "+":
            return a+b;
            break;
        case "-":
            return a-b;
            break;
        case "*":
            return a*b;
            break;
        case "/":
            if (b === 0) {
                return "cannot divide by 0!"
            }
            return a/b;
            break;
    }
}

let displayValue = "";
let displayField = document.querySelector(".display");

let numButtons = document.querySelectorAll(".number");

numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        displayValue += button.textContent;
        displayField.textContent = displayValue;
    });
});
let operator;
let firstNum = undefined;
let secondNum = undefined;
let secondNumStarting;
let operationButtons = document.querySelectorAll(".operator");
operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (firstNum === undefined) {
            if (displayValue.length < 1) {
                return;
            }
            firstNum = Number(displayValue);
            operator = button.textContent;
        }
        else {
            secondNum = Number(displayValue.substring(secondNumStarting));
            solution = operate(operator,firstNum,secondNum);
            firstNum = solution;
            operator = button.textContent;
        }
        secondNumStarting = displayValue.length + 1;
        displayValue += button.textContent;
        displayField.textContent = displayValue;
        
    })
})

let equalButton = document.querySelector(".equals");
let solution;
equalButton.addEventListener("click",() => {
    secondNum = Number(displayValue.substring(secondNumStarting));
    if (displayValue.substring(secondNumStarting) < 1) {
        return;
    }
    solution = operate(operator,firstNum,secondNum);
    if (!Number.isInteger(solution)) {
        solution = Math.round(solution * 10000000000)/10000000000;
    }
    displayField.textContent = solution;
    displayValue = "";
    firstNum = undefined;
    secondNum = undefined;
    solution = undefined;
    hasDecimal = false;
})

let clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", () => {
    displayValue = "";
    displayField.textContent = displayValue;
    firstNum = undefined;
    secondNum = undefined;
    solution = undefined;
    hasDecimal = false;
})

let hasDecimal = false;

let decimalButton = document.querySelector(".decimal");

decimalButton.addEventListener("click", () => {
    if (!hasDecimal) {
        displayValue += decimalButton.textContent;
        displayField.textContent = displayValue;
        hasDecimal = true;
    }
});