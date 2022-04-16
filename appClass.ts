interface UserInterface {
  getFullName(): string;
};

class User implements UserInterface {
  private firstName: string; // can only be used inside this class
  protected lastName: string; // extends to a child class but not public

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user = new User('Henry', 'Eze');
console.log(user.getFullName());
