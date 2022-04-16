"use strict";
;
class User {
    constructor(firstName, lastName) {
        this.nairaSymbol = '₦'; // You can not change a readonly property in the class. You can only read it from within the class and in an instance
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName} uses the ${this.nairaSymbol} symbol.`;
    }
}
User.hoursPerDay = 24; // static properties are accessible outside the class but as a property of the class itself not the instance
class Admin extends User {
    setEditor(editor) {
        this.editor = editor;
    }
    getEditor() {
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
