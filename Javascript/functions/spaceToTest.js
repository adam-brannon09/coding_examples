function addition(num1, num2) {
    return num1 + num2;
  
};

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

const statementOne = 'This is statement one.';
const statementTwo = 'This is statement two.';

const printStatement = (statementOne, statementTwo) => {
    console.log(statementOne + ' ' + statementTwo);
};

printStatement(statementOne, statementTwo);