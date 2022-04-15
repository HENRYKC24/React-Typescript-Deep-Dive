type NumStr = number | string;
const combine = (input1: NumStr, input2: NumStr) => {
  let result: NumStr;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = `${input1}${input2}`;
  }
  return result;
};

console.log(combine(4, 7));
console.log(combine('4', '7'));
