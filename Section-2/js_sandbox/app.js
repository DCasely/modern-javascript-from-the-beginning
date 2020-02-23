// // FOR LOOP

// for (let i = 0; i <= 10; i++) {
//   if (i === 2) {
//     console.log('2 is my favorite number');
//     continue;
//   }

//   if (i === 5) {
//     console.log('Stop the loop');
//     break;
//   }

//   console.log('Number ' + i);
// }

// WHILE LOOP

// let i = 0;

// while (i < 10) {
//   console.log('Number ' + i);
//   i++;
// }

// DO WHILE

// let i = 100;

// do {
//   console.log('Number ' + i);
//   i++;
// } while (i < 10);

// LOOP THROUGH ARRAY
// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// FOREACH
// cars.forEach(function(car, index, array) {
//   console.log(`${index} : ${car}`);
//   console.log(array);
// });

// // MAP
// const users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Sarah' },
//   { id: 3, name: 'Karen' },
//   { id: 4, name: 'Steve' }
// ];

// const ids = users.map(function(user) {
//   return user.id;
// });

// console.log(ids);

// FOR IN LOOP
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 40
// };

// for (let x in user) {
//   console.log(`${x} : ${user[x]}`);
// }

// ===================================
// 20. A LOOK AT THE WINDOW OBJECT
// ===================================

// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert

// .alert('Hello World');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if (confirm('Are you sure')) {
//   console.log('YES');
// } else {
//   console.log('NO');
// }

// let val;

// // Outer height and width
// val = window.outerHeight;
// val = window.outerWidth;

// // Inner height and width
// val = window.innerHeight;
// val = window.innerWidth;

// // Scroll points
// val = window.scrollY;
// val = window.scrollX;

// // Location Object
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search;

// // Redirect
// // window.location.href = 'http://google.com';
// // Reload
// // window.location.reload();

// // History Object

// // window.history.go(-2);
// val = window.history.length;

// // Navigator Object
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;

// console.log(val);

// ===================================
// 21. BLOCK SCOPE WITH LET & CONST
// ===================================

// Global Scope
var a = 1;
let b = 2;
const c = 3;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope:', a, b, c);
// }

// test();

// if (true) {
//   // Block Scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('If Scope:', a, b, c);
// }

// for (var a = 0; a < 10; a++) {
//   console.log(`Loop: ${a}`);
// }

// console.log('Global Scope:', a, b, c);
