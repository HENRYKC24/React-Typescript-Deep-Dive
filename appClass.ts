interface UserInterface {
  getFullName(): string;
};

class User implements UserInterface {
  private firstName: string; // can only be used inside this class
  protected lastName: string; // extends to a child class but not public
  static hoursPerDay: number = 24; // static properties are accessible outside the class but as a property of the class itself not the instance
  readonly nairaSymbol:string = '₦'; // You can not change a readonly property in the class. You can only read it

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName} uses the ${this.nairaSymbol} symbol.`;
  }
}

const user = new User('Henry', 'Eze');
console.log(user.getFullName());
console.log(User.hoursPerDay);
