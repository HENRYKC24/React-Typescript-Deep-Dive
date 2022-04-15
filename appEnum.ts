enum Role {ADMIN, READ_ONLY, AUTHOR};

const person: {
  name: string;
  age: number;
  role: number;
} = {
  name: 'Henry Kc',
  age: 40,
  role: Role.ADMIN,
};

console.log(person);