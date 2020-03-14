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
