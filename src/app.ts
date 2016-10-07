import {first, second, third} from './my-lib'
import Car from './car';
import {calculate} from './calculate'

// Dynamically added properties are not valid in TypeScript
console.log(first.name);
console.log(third.organization);


// TS does not support all cases of ES2015 destructuring
const {name = 'John Doe', organization = 'Project Mayhem'} = third; // TS does not allow destructuring an obj to optional variables ...
const message = 'Do not talk about superset!';

function doSomething({name = 'John Doe', organization = 'Project Mayhem', message = 'Do not talk about superset!'}){} // ... but it is valid to destructuring an object to optional function arguments ?!?
doSomething(third);


// ES2015 classes are not valid TypeScript classes
const myCar = new Car(42);
console.log(myCar.weight);

// ES2015 modules (as WebPack understands them), are not valid TypeScript modules
const result = calculate([1,2,3]);
console.log(result);

console.log('Hello from TypeScript!');

