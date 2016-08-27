'use strict';

var Person = require('./person.js');
var Employee = require('./employee.js');
var p = new Person('bob', 23, '1st street');
var e = new Employee('tom', 33, '2nd street', 'developer', 2000, ['finish project']);

console.log(p);
console.log(p.getProprieties());
console.log(p.getName());
p.setName('tom');
console.log(p.getName());
console.log(p);
console.log("-----------------------------");
console.log(e);
console.log(e.getProprieties());
console.log(e.getName());
e.setName('ben');
console.log(e.getName());
e.setName();
console.log(e.getName());
console.log(e);