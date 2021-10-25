const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    // create a new Employee object
    const employee = new Employee('Ian', 1, 'concord511@gmail.com');

    // create variables to hold values returned by Employee object's functions
    const empName = employee.getName();
    const empId = employee.getId();
    const empEmail = employee.getEmail();
    const empRole = employee.getRole();

    // results to expect
    expect(empName).toEqual(expect.any(String));
    expect(empId).toEqual(expect.any(Number));
    expect(empEmail).toEqual(expect.any(String));
    expect(empRole).toEqual('Employee');
});