var userInput; // using any here is error prone. Always use unknown type
var userName;
var userAge = 17;
userInput = 10;
userInput = 'Man';
if (typeof userInput === 'string') {
    userName = userInput;
}
else if (typeof userInput === 'number') {
    userAge = userInput;
}
var generateError = function (message, code) {
    throw { message: message, code: code };
};
try {
    generateError('This is a huge error', 402);
}
catch (err) {
    console.log(err);
}
console.log('userName: ', userName, '| userAge: ', userAge);
