let userInput: unknown; // using any here is error prone. Always use unknown type
let userName: string = '';
let userAge: number = 17;

userInput = 10;
userInput = 'Man';

if (typeof userInput === 'string') {
  userName = userInput;
} else if (typeof userInput === 'number') {
  userAge = userInput;
}

const generateError = (message: string, code: number): never => {
  throw {message, code};
};

try {
  generateError('This is a huge error', 402);
} catch (err) {
  console.log(err);
}

console.log('userName: ', userName, '| userAge: ', userAge);
