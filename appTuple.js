"use strict";
const myList = ['man', 30];
myList.push(40); // push is an exceptional case and can not be tracked by typescript
console.log(myList);
