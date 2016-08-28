'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Person = require('./person.js');
var Employee = require('./employee.js');

var p = new Person('bob', 23, '1st street');
var e1 = new Employee('tom', 33, '2nd street', 'developer', 2000, ['java project', 'C# project']);
var e2 = new Employee('ben', 34, '2nd street', 'developer', 3500, ['php project']);
var e3 = new Employee('steve', 23, '2nd street', 'developer', 1800, ['javascript project']);
var e4 = new Employee('mike', 19, '2nd street', 'developer', 1600, ['C# project']);
var e5 = new Employee('rob', 42, '2nd street', 'developer', 3600, ['php project']);

var employees = [];
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

var salary_arr = [],
    ages = [];
employees.forEach(function (employee) {
  // Arrow function for statement bodies
  salary_arr.push(employee.getSalary());
});
employees.forEach(function (employee) {
  ages.push(employee.getAge());
});

employees.forEach(function (employee) {
  console.log(greet(employee));
});

console.log(salary_arr);
console.log(findBiggestSalary(salary_arr));
console.log(getTotalForPayments(salary_arr));
console.log(e1.getTasks());

function findBiggestSalary() {
  var args = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

  return Math.max.apply(Math, _toConsumableArray(args)); // Spread Opearator
}

function getTotalForPayments() {
  var arr = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  return arr.reduce(function (prev, current) {
    // Arrow function for expression bodies
    return prev + current;
  }, 0);
}

function findAvgAgeAndSalary() {
  var arr = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  return arr.reduce(function (prev, current) {
    // Arrow function for expression bodies
    return prev + current;
  }, 0) / arr.length;
}

function greet(employee) {
  var name = employee.name;
  var age = employee.age;
  var address = employee.address; // Destructuring Objects

  return 'Hi, my name is ' + name + ', i have ' + age + ' and I live on ' + address;
}