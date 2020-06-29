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

// // STRINGS
// const name1 = 'Davin';
// const name2 = new String('Davin');

// console.log(name1);

// name2.foo = 'bar';
// console.log(name2);

// console.log(typeof name1);
// console.log(typeof name2);

// if (name1 === 'Davin') {
//   console.log('Yes');
// } else {
//   console.log('No');
// }

// if (name2 === 'Davin') {
//   console.log('Yes');
// } else {
//   console.log('No');
// }

// // NUMBERS
// const num1 = 5;
// const num2 = new Number(5);

// console.log(typeof num1);
// console.log(typeof num2);

// const bool1 = true;
// const bool2 = new Boolean(true);

// console.log(typeof bool1);
// console.log(typeof bool2);

// // FUNCTIONS

// const getSum1 = function (x, y) {
//   return x + y;
// };

// console.log(getSum1(1, 1));

// const getSum2 = new Function('x', 'y', 'return 1 + 1');

// console.log(getSum2(1, 1));

// // OBJECTS
// const john = { name: 'John' };
// console.log(john);

// const john2 = new Object({ name: 'John' });
// console.log(john2);

// // ARRAYS
// const arr1 = [1, 2, 3, 4];
// const arr2 = new Array(1, 2, 3, 4);

// console.log(arr1);
// console.log(arr2);

// // REGEX (REGULAR EXPRESSIONS)
// const re1 = /\w+/;
// const re2 = new RegExp('\\w+');

// console.log(re1);
// console.log(re2);

// ================================================
// SECTION 46: PROTOTYPES EXPLAINED
// ================================================

// // Object.prototype
// // Person.prototype

// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = new Date(dob);
// }

// // Calculate age
// Person.prototype.calculateAge = function () {
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// };

// // Get full name
// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// // Gets Married
// Person.prototype.getsMarried = function (newLastName) {
//   this.lastName = newLastName;
// };

// const john = new Person('John', 'Doe', '8-12-90');
// const mary = new Person('Mary', 'Jane', 'March 5, 1988');

// console.log(john);
// console.log(mary);

// console.log(john.getFullName());
// console.log(mary.getFullName());

// mary.getsMarried('Smith');
// console.log(mary.getFullName());

// console.log(mary.hasOwnProperty('firstName'));
// console.log(mary.hasOwnProperty('getFullName'));
// console.log(mary.__proto__.hasOwnProperty('getFullName'));

// ================================================
// SECTION 47: PROTOTYPAL INHERITANCE
// ================================================

// // Person Constructor
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// // Greeting
// Person.prototype.greeting = function () {
//   return `Hello ${this.firstName} ${this.lastName}`;
// };

// const person1 = new Person('John', 'Doe');

// console.log(person1.greeting());

// // Customer constructor
// function Customer(firstName, lastName, phone, membership) {
//   Person.call(this, firstName, lastName);

//   this.phone = phone;
//   this.membership = membership;
// }

// // Inherit the Person prototype methods
// Customer.prototype = Object.create(Person.prototype);

// // Make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;

// // Create customer

// const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

// console.log(customer1);

// // Customer greeting
// Customer.prototype.greeting = function () {
//   return `Hello ${this.firstName} ${this.lastName}, welcome to The Casely Group`;
// };

// console.log(customer1.greeting());

// ================================================
// SECTION 48: USING OBJECT.CREATE
// ================================================

// const personPrototypes = {
//   greeting: function () {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   },

//   getsMarried: function (newLastName) {
//     return (this.lastName = newLastName);
//   },
// };

// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;

// mary.getsMarried('Thompson');

// console.log(mary);
// console.log(mary.greeting());

// const davin = Object.create(personPrototypes, {
//   firstName: { value: 'Davin' },
//   lastName: { value: 'Casely' },
//   age: { value: 30 },
// });

// console.log(davin);
// console.log(davin.greeting());
