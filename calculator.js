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
            return a/b;
            break;
    }
}