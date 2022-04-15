var combine = function (input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = "".concat(input1).concat(input2);
    }
    return result;
};
console.log(combine(4, 7));
console.log(combine('4', '7'));
