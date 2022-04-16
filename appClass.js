;
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.nairaSymbol = '₦'; // You can not change a readonly property in the class. You can only read it
        this.firstName = firstName;
        this.lastName = lastName;
    }
    User.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName, " uses the ").concat(this.nairaSymbol, " symbol.");
    };
    User.hoursPerDay = 24; // static properties are accessible outside the class but as a property of the class itself not the instance
    return User;
}());
var user = new User('Henry', 'Eze');
console.log(user.getFullName());
console.log(User.hoursPerDay);
