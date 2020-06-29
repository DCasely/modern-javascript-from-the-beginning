// ================================================
// SECTION 44: CONSTRUCTORS & THE 'THIS' KEYWORD
// ================================================

// const davin = {
//   name: 'Davin',
//   age: 30,
// };

// console.log(davin);

// ================================================

// function Person(name, dob) {
//   this.name = name;
//   // this.age = age;
//   this.birthday = new Date(dob);

//   this.calculateAge = function () {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   };
// }

// const davin = new Person('Davin', '9-17-1989');
// const john = new Person('John', '8-16-1948');

// console.log(davin);
// console.log(john.calculateAge());

// ================================================
// SECTION 45: BUILT IN CONSTRUCTORS
// ================================================

// STRINGS
const name1 = 'Davin';
const name2 = new String('Davin');

console.log(name1);

name2.foo = 'bar';
console.log(name2);

console.log(typeof name1);
console.log(typeof name2);

if (name1 === 'Davin') {
  console.log('Yes');
} else {
  console.log('No');
}

if (name2 === 'Davin') {
  console.log('Yes');
} else {
  console.log('No');
}

// NUMBERS
const num1 = 5;
const num2 = new Number(5);

console.log(typeof num1);
console.log(typeof num2);

const bool1 = true;
const bool2 = new Boolean(true);

console.log(typeof bool1);
console.log(typeof bool2);

// FUNCTIONS

const getSum1 = function (x, y) {
  return x + y;
};

console.log(getSum1(1, 1));

const getSum2 = new Function('x', 'y', 'return 1 + 1');

console.log(getSum2(1, 1));

// OBJECTS
const john = { name: 'John' };
console.log(john);

const john2 = new Object({ name: 'John' });
console.log(john2);

// ARRAYS
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

console.log(arr1);
console.log(arr2);

// REGEX (REGULAR EXPRESSIONS)
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re1);
console.log(re2);
