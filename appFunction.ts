const add = (n1: number, n2: number): number => n1 + n2;

const printResult = (num: number): void => {
  console.log('Result: ' + num)
};

const addAndHandle = (num1: number, num2: number, callBack: (num: number) => void) => {
  const result = num1 + num2;
  callBack(result);
};

addAndHandle(10, 20, (result) => {
  console.log(result);
});

printResult(add(4, 12));

let combinedValues: (num: number, num2: number) => number;
combinedValues = add;
// combinedValues = printResult;

console.log(combinedValues(9, 20));
