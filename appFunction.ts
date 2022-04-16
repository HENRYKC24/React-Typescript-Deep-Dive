const plus = (n1: number, n2: number): number => n1 + n2;

const printResult = (num: number): void => {
  console.log('Result: ' + num)
};

const plusAndHandle = (num1: number, num2: number, callBack: (num: number) => void) => {
  const result = num1 + num2;
  callBack(result);
};

plusAndHandle(10, 20, (result) => {
  console.log(result);
});

printResult(plus(4, 12));

let combinedValues: (num: number, num2: number) => number;
combinedValues = plus;
// combinedValues = printResult;

console.log(combinedValues(9, 20));
