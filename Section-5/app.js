// ================================================
// Section 44: Constructors & the 'this Keyword
// ================================================

// const davin = {
//   name: 'Davin',
//   age: 30
// };

// console.log(davin);
// console.log(davin.age);

//===================================

// // Person constructor
// function Person(name, dob) {
//   this.name = name;
//   //   this.age = age;
//   this.birthday = new Date(dob);
//   this.calculateAge = function() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   };
// }

// // const brad = new Person('Brad', 36);
// // const john = new Person('John', 30);

// // console.log(john.age);

// const brad = new Person('Brad', '9-10-1981');
// console.log(brad.calculateAge());

// ================================================
// Section 45: Built in Constructors
// ================================================

// String

const name1 = 'Jeff';
const name2 = new String('Jeff');

// name2.foo = 'bar';
// console.log(name2);

console.log(typeof name2);

if (name2 === 'Jeff') {
  console.log('YES');
} else {
  console.log('NO');
}

// Number
const num1 = 5;
const num2 = new Number(5);

console.log(typeof num2);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function(x, y) {
  return x + y;
};

const getSum2 = new Function('x', 'y', 'return 1 + 1');

// Object
const john = { name: 'John' };
const john2 = new Object({ name: 'John' });
console.log(john2);

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re2);
