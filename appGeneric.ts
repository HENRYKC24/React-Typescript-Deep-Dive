interface ObjectInterface<T> {
  name: string;
  town: string;
  color: T;
};

const addId = <T extends object>(obj: T) => {
  const id = (Math.random() * Math.random()).toString(16);
  return {
    ...obj,
    id,
  };  
};

const myObj1: ObjectInterface<string> = addId({name: 'Henry', town: 'Orba', color: 'purple'});
console.log(myObj1.color);
