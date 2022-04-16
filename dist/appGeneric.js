"use strict";
;
const addId = (obj) => {
    const id = (Math.random() * Math.random()).toString(16);
    return Object.assign(Object.assign({}, obj), { id });
};
const myObj1 = addId({ name: 'Henry', town: 'Orba', color: 'purple' });
console.log(myObj1.color);
