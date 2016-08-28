(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Person = require('./person.js');

var Employee = function (_Person) {
  _inherits(Employee, _Person);

  function Employee(name, age, address, job, salary) {
    var tasks = arguments.length <= 5 || arguments[5] === undefined ? [] : arguments[5];

    _classCallCheck(this, Employee);

    var _this = _possibleConstructorReturn(this, (Employee.__proto__ || Object.getPrototypeOf(Employee)).call(this, name, age, address));

    _this.job = job;
    _this.salary = salary;
    _this.tasks = tasks;
    return _this;
  }

  _createClass(Employee, [{
    key: 'getJob',
    value: function getJob() {
      return this.job;
    }
  }, {
    key: 'getSalary',
    value: function getSalary() {
      return this.salary;
    }
  }, {
    key: 'getTasks',
    value: function getTasks() {
      var _this2 = this;

      var result = 'Tasks:';
      this.tasks.forEach(function (task) {
        // Lexical this
        result += _this2.name + ":" + task + ", ";
      });
      return result;
    }
  }, {
    key: 'setJob',
    value: function setJob() {
      var job = arguments.length <= 0 || arguments[0] === undefined ? this.job : arguments[0];

      this.job = job;
    }
  }, {
    key: 'setSalary',
    value: function setSalary() {
      var salary = arguments.length <= 0 || arguments[0] === undefined ? this.salary : arguments[0];

      this.salary = salary;
    }
  }, {
    key: 'addTask',
    value: function addTask(task) {
      this.tasks.push(task);
    }
  }, {
    key: 'getProprieties',
    value: function getProprieties() {
      return "Person has:" + Object.keys(this);
    }
  }]);

  return Employee;
}(Person);

module.exports = Employee;
},{"./person.js":3}],2:[function(require,module,exports){
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
},{"./employee.js":1,"./person.js":3}],3:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  function Person(name, age, address) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
    this.address = address;
  }

  _createClass(Person, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getAge",
    value: function getAge() {
      return this.age;
    }
  }, {
    key: "getAddress",
    value: function getAddress() {
      return this.address;
    }
  }, {
    key: "setName",
    value: function setName() {
      var name = arguments.length <= 0 || arguments[0] === undefined ? this.name : arguments[0];

      this.name = name;
    }
  }, {
    key: "setAge",
    value: function setAge() {
      var age = arguments.length <= 0 || arguments[0] === undefined ? this.age : arguments[0];

      this.age = age;
    }
  }, {
    key: "setAddress",
    value: function setAddress() {
      var address = arguments.length <= 0 || arguments[0] === undefined ? this.address : arguments[0];

      this.address = address;
    }
  }, {
    key: "getProprieties",
    value: function getProprieties() {
      return "Person has:" + Object.keys(this);
    }
  }]);

  return Person;
}();

module.exports = Person;
},{}]},{},[2]);
