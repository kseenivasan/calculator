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
let operand;
let firstNum = undefined;
let secondNum = undefined;
let secondNumStarting;
let operationButtons = document.querySelectorAll(".operand");
operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        operand = button.textContent;
        if (firstNum === undefined) {
            firstNum = Number(displayValue);
        }
        else {
            secondNum = Number(displayValue.substring(secondNumStarting));
            solution = operate(operand,firstNum,secondNum);
            firstNum = solution;
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
    solution = operate(operand,firstNum,secondNum);
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