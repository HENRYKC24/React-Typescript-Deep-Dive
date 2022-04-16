"use strict";
const plus = (n1, n2) => n1 + n2;
const printResult = (num) => {
    console.log('Result: ' + num);
};
const plusAndHandle = (num1, num2, callBack) => {
    const result = num1 + num2;
    callBack(result);
};
plusAndHandle(10, 20, (result) => {
    console.log(result);
});
printResult(plus(4, 12));
let combinedValues;
combinedValues = plus;
// combinedValues = printResult;
console.log(combinedValues(9, 20));
