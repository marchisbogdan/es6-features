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