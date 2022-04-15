const add = (n1: number, n2: number): number => n1 + n2;

const printResult = (num: number): void => {
  console.log('Result: ' + num)
};

printResult(add(4, 12));

let combinedValues: (num: number, num2: number) => number;
combinedValues = add;
// combinedValues = printResult;

console.log(combinedValues(9, 20));
