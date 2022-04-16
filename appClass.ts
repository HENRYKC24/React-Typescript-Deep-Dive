interface UserInterface {
  getFullName(): string;
};

class User implements UserInterface {
  private firstName: string; // can only be used inside this class
  protected lastName: string; // extends to a child class but not public
  static hoursPerDay: number = 24; // static properties are accessible outside the class but as a property of the class itself not the instance
  readonly nairaSymbol: string = '₦'; // You can not change a readonly property in the class. You can only read it from within the class and in an instance

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName} uses the ${this.nairaSymbol} symbol.`;
  }
}

class Admin extends User {
  private editor!: string;

  setEditor(editor: string) {
    this.editor = editor;
  }

  getEditor(): string {
    return this.editor;
  }
}

const user = new User('Henry', 'Eze');
const admin1 = new Admin('Agatha', 'Ameh');
console.log(admin1);
console.log(user.getFullName());
console.log(User.hoursPerDay);
admin1.setEditor('Emmanuel');
console.log(admin1.getEditor());
admin1.setEditor('Henry');
console.log(admin1.getEditor());
