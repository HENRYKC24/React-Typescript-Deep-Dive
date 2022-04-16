var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
;
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.nairaSymbol = '₦'; // You can not change a readonly property in the class. You can only read it from within the class and in an instance
        this.firstName = firstName;
        this.lastName = lastName;
    }
    User.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName, " uses the ").concat(this.nairaSymbol, " symbol.");
    };
    User.hoursPerDay = 24; // static properties are accessible outside the class but as a property of the class itself not the instance
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
var user = new User('Henry', 'Eze');
var admin1 = new Admin('Agatha', 'Ameh');
console.log(admin1);
console.log(user.getFullName());
console.log(User.hoursPerDay);
admin1.setEditor('Emmanuel');
console.log(admin1.getEditor());
admin1.setEditor('Henry');
console.log(admin1.getEditor());
