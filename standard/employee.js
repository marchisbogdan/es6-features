"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Person = require('./person.js');

var Employee = function (_Person) {
  _inherits(Employee, _Person);

  function Employee(name, age, address, job, salary, tasks) {
    _classCallCheck(this, Employee);

    var _this = _possibleConstructorReturn(this, (Employee.__proto__ || Object.getPrototypeOf(Employee)).call(this, name, age, address));

    _this.job = job;
    _this.salary = salary;
    _this.tasks = tasks;
    return _this;
  }

  _createClass(Employee, [{
    key: "getJob",
    value: function getJob() {
      return this.job;
    }
  }, {
    key: "getSalary",
    value: function getSalary() {
      return this.salary;
    }
  }, {
    key: "getTasks",
    value: function getTasks() {
      return this.tasks;
    }
  }, {
    key: "setJob",
    value: function setJob() {
      var job = arguments.length <= 0 || arguments[0] === undefined ? this.job : arguments[0];

      this.job = job;
    }
  }, {
    key: "setSalary",
    value: function setSalary() {
      var salary = arguments.length <= 0 || arguments[0] === undefined ? this.salary : arguments[0];

      this.salary = salary;
    }
  }, {
    key: "getProprieties",
    value: function getProprieties() {
      return "Person has:" + Object.keys(this);
    }
  }]);

  return Employee;
}(Person);

module.exports = Employee;