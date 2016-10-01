"use strict";
var my_lib_1 = require('./my-lib');
var car_1 = require('./car');
var calculate_1 = require('./calculate');
// Dynamically added properties are not valid in TypeScript
console.log(my_lib_1.first.name);
console.log(my_lib_1.second.organization);
// TS does not support all cases of ES2015 destructuring
var _a = my_lib_1.third.name, name = _a === void 0 ? 'John Doe' : _a, _b = my_lib_1.third.organization, organization = _b === void 0 ? 'Project Mayhem' : _b, _c = my_lib_1.third.message, message = _c === void 0 ? 'Do not talk about superset!' : _c; // TS does not allow destructure an obj to variables ...
function doSomething(_a) {
    var _b = _a.name, name = _b === void 0 ? 'John Doe' : _b, _c = _a.organization, organization = _c === void 0 ? 'Project Mayhem' : _c, _d = _a.message, message = _d === void 0 ? 'Do not talk about superset!' : _d;
} // ... but it is valid to destructure an object to function arguments ?!?
doSomething(my_lib_1.third);
// ES2015 classes are not valid TypeScript classes
var myCar = new car_1.default(42);
console.log(myCar.weight);
// ES2015 modules (as WebPack understands them), are not valid TypeScript modules
var result = calculate_1.calculate([1, 2, 3]);
console.log(result);
console.log('Hello from TypeScript!');
//# sourceMappingURL=app.js.map