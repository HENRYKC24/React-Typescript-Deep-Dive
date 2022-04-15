const add = (n1: number, n2: number): number => n1 + n2;

const printResult = (num: number): void => {
  console.log('Result: ' + num)
};

printResult(add(4, 12));

let combinedValues: Function;
combinedValues = add;
combinedValues = printResult;

console.log(combinedValues());
