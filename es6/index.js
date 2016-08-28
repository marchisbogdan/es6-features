const Person = require('./person.js');
const Employee = require('./employee.js');

let p = new Person('bob', 23, '1st street');
let e1 = new Employee('tom', 33, '2nd street', 'developer', 2000, ['java project', 'C# project']);
let e2 = new Employee('ben', 34, '2nd street', 'developer', 3500, ['php project']);
let e3 = new Employee('steve', 23, '2nd street', 'developer', 1800, ['javascript project']);
let e4 = new Employee('mike', 19, '2nd street', 'developer', 1600, ['C# project']);
let e5 = new Employee('rob', 42, '2nd street', 'developer', 3600, ['php project']);

let employees = [];
employees.push(e1);
employees.push(e2);
employees.push(e3);
employees.push(e4);
employees.push(e5);
// console.log(p);
// console.log(p.getProprieties());
// console.log(p.getName());
// p.setName('tom');
// console.log(p.getName());
// console.log(p);
// console.log("-----------------------------")
// console.log(e);
// console.log(e.getProprieties());
// console.log(e.getName());
// e.setName('ben');
// console.log(e.getName());
// e.setName();
// console.log(e.getName());
// console.log(e);

let salary_arr = [],
  ages = [];
employees.forEach(employee => { // Arrow function for statement bodies
  salary_arr.push(employee.getSalary())
});
employees.forEach(employee => {
  ages.push(employee.getAge());
})

employees.forEach(employee => {
  console.log(greet(employee));
})

console.log(salary_arr);
console.log(findBiggestSalary(salary_arr));
console.log(getTotalForPayments(salary_arr));
console.log(e1.getTasks());

function findBiggestSalary(args = 0) {
  return Math.max(...args); // Spread Opearator
}

function getTotalForPayments(arr = []) {
  return arr.reduce((prev, current) => { // Arrow function for expression bodies
    return prev + current;
  }, 0)
}

function findAvgAgeAndSalary(arr = []) {
  return arr.reduce((prev, current) => { // Arrow function for expression bodies
    return prev + current;
  }, 0) / arr.length;
}

function greet(employee) {
  let {
    name,
    age,
    address
  } = employee; // Destructuring Objects
  return 'Hi, my name is ' + name + ', i have ' + age + ' and I live on ' + address;
}
