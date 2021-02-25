const Manager = require('../lib/Manager');

const testManager = new Manager('name', 'id', 'email','office');
const testRole = 'Manager';

test('getName returns name', () => {
    expect(testManager.getName()).toBe('name');
});

test('getId returns id', () => {
    expect(testManager.getId()).toBe('id');
});

test('getEmail returns email', () => {
    expect(testManager.getEmail()).toBe('email');
});

test('getOffice returns office', () => {
    expect(testManager.getOffice()).toBe('office');
});

test('getRole returns Manager', () => {
    expect(testManager.getRole()).toBe(testRole);    
});