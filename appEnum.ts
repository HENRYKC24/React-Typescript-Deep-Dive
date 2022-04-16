enum Role {ADMIN, READ_ONLY, AUTHOR};

const someone: {
  name: string;
  age: number;
  role: number;
} = {
  name: 'Henry Kc',
  age: 40,
  role: Role.ADMIN,
};

console.log(someone);