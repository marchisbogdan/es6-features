const Person = require('./person.js');

class Employee extends Person {
  constructor(name, age, address, job, salary, tasks) {
    super(name, age, address);
    this.job = job;
    this.salary = salary;
    this.tasks = tasks;
  }
  getJob() {
    return this.job;
  }
  getSalary() {
    return this.salary;
  }
  getTasks() {
    return this.tasks;
  }
  setJob(job = this.job) {
    this.job = job;
  }
  setSalary(salary = this.salary) {
    this.salary = salary;
  }

  getProprieties() {
    return "Person has:" + Object.keys(this);
  }
}

module.exports = Employee;
