class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getAddress() {
    return this.address;
  }

  setName(name = this.name) {
    this.name = name;
  }

  setAge(age = this.age) {
    this.age = age;
  }

  setAddress(address = this.address) {
    this.address = address;
  }

  getProprieties() {
    return "Person has:" + Object.keys(this);
  }
}
module.exports = Person;
