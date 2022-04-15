var add = function (n1, n2) { return n1 + n2; };
var printResult = function (num) {
    console.log('Result: ' + num);
};
var addAndHandle = function (num1, num2, callBack) {
    var result = num1 + num2;
    callBack(result);
};
addAndHandle(10, 20, function (result) {
    console.log(result);
});
printResult(add(4, 12));
var combinedValues;
combinedValues = add;
// combinedValues = printResult;
console.log(combinedValues(9, 20));
