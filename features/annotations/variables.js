// Primitive data types
var apples = 5;
var speed = "fast";
var hasName = true;
var nothingMuch = null;
var nothing = undefined;
var now = new Date();
// Arrays
var colors = ["red", "blue", "green"];
var myNums = [1, 2, 3];
var truths = [true, true, false];
//Classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
// Object Literals
var point = {
    x: 10,
    y: 20
};
// Functions
var logNumber = function (i) {
    console.log(i);
};
// When to use annotations
// 1) We have a function that returns the 'any' type
var json = '{"x": 10, "y": 20}';
var coordinates = JSON.parse(json);
console.log(coordinates);
// 2) When we declare a variable on one line and initialize it later
// 3) When TS cannot infer the type
