// ================================================
// Section 44: Constructors & the 'this Keyword
// ================================================

// const davin = {
//   name: 'Davin',
//   age: 30,
// };

// console.log(davin);

// ================================================

function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);

  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

const davin = new Person('Davin', '9-17-1989');
const john = new Person('John', '8-16-1948');

console.log(davin);
console.log(john.calculateAge());
