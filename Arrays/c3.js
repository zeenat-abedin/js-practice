// Design a class for employee which takes id and name in during construction of object and has a salary property
// Design a class for manager which is employee and can have department property

class Employee {
  constructor(id, name) {
    if (!id || !name) {
      throw new Error('Employee id and name are mandatory');
    }
    this.id = id;
    this.name = name;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getSalary() {
    return this.salary;
  }
}

class Manager extends Employee {
  constructor() {}
}

const employee = new Employee(1, 'Jack');
employee.setSalary('1000');

console.log('c3:', employee, employee.getSalary(), employee.getId(), employee.getName());
