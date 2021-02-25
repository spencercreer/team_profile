const Employee = require('../lib/Employee');

const testEmployee = new Employee('name', 'id', 'email');
const testRole = 'Employee';

test('getName returns name', () => {
    expect(testEmployee.getName()).toBe('name');
});

test('getId returns id', () => {
    expect(testEmployee.getId()).toBe('id');
});

test('getEmail returns email', () => {
    expect(testEmployee.getEmail()).toBe('email');
});

test('getRole returns role', () => {
    expect(testEmployee.getRole()).toBe(testRole);
});