const Person = require('./person.js');

class Employee extends Person {
  constructor(name, age, address, job, salary, tasks = []) {
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
    let result = 'Tasks:';
    this.tasks.forEach(task => { // Lexical this
      result += this.name + ":" + task + ", ";
    });
    return result;
  }
  setJob(job = this.job) {
    this.job = job;
  }
  setSalary(salary = this.salary) {
    this.salary = salary;
  }
  addTask(task) {
    this.tasks.push(task);
  }

  getProprieties() {
    return "Person has:" + Object.keys(this);
  }
}

module.exports = Employee;
