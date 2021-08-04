"use strict";
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
exports.__esModule = true;
var message = "Welcome back";
console.log(message);
var x = 10; // Can be done without initialisation
var y = 20; // Always initialized with a value, can never be re-assigned
var sum;
var title = 'Sympa';
var isBeginner = true;
var total = 0;
var name = 'SAUVE';
// Template strings
var sentence = "My name is " + name + " I am beginner in Typescript";
console.log(sentence);
//Accurate Intellicence
//null and undefined, Not used on their own
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//tuple data type
var person1 = ['Chris', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var shirtColor = Color.Green;
console.log(shirtColor);
//Any type: value from third party library, or user input that's dynamic.
var randomValue = 200;
randomValue = true;
randomValue = 'SAUVE';
var myVariable = 10;
//Unkwon type, can't call any property of unknown
//function that checks if variable has 
//name property or not
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
var yourVariable = 10;
if (hasName(yourVariable)) {
    console.log(yourVariable.name);
}
// (yourVariable as string).toUpperCase();
var a;
a = 10;
a = true;
var b = 20; //Type checking happends here
var multiType; //Multiple types
multiType = 20;
multiType = true;
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
add(5);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'SAUVE',
    lastName: 'Jean-Luc'
};
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('SAUVEF Jean-Luc');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    ;
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Luck Lucy');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
