"use strict";
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
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();
