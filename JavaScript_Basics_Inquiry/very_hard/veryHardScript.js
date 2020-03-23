var num1 = prompt('Number 1');
var operator = prompt('Operator');
var num2 = prompt('Number 2');
var solution = Number(num1) + Number(num2);

if (operator == '+')  {
    function add() {
        return num1 + num2;
    }
    console.log(num1 + ' + ' + num2 + ' = ' + solution);

} else if(operator == '-') {
    solution = num1 - num2;
    function subtract() {
        return num1 - num2;
    }
    console.log(num1 + ' - ' + num2 + ' = ' + solution);

} else if(operator == '*') {
    solution = num1 * num2;
    function multiply() {
        return num1 * num2;
    }
    console.log(num1 + ' * ' + num2 + ' = ' + solution);

} else if(operator == '/') {
    solution = num1 / num2;
    function divide() {
        return num1 / num2;
    }
    console.log(num1 + ' / ' + num2 + ' = ' + solution);

} else {
    console.log(operator + ' is not an operator, please refresh and try again.');
}




















