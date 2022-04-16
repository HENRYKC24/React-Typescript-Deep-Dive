"use strict";
const add = (n1, n2) => n1 + n2;
const printResult = (num) => {
    console.log('Result: ' + num);
};
const addAndHandle = (num1, num2, callBack) => {
    const result = num1 + num2;
    callBack(result);
};
addAndHandle(10, 20, (result) => {
    console.log(result);
});
printResult(add(4, 12));
let combinedValues;
combinedValues = add;
// combinedValues = printResult;
console.log(combinedValues(9, 20));
