var add = function (n1, n2) { return n1 + n2; };
var printResult = function (num) {
    console.log('Result: ' + num);
};
printResult(add(4, 12));
var combinedValues;
combinedValues = add;
console.log(combinedValues(3, 30));
