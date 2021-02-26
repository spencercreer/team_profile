const Engineer = require('../lib/Engineer');

const testEngineer = new Engineer('name', 'id', 'email', 'github');
const testRole = 'Engineer';

test('getName returns name', () => {
    expect(testEngineer.getName()).toBe('name');
});

test('getId returns id', () => {
    expect(testEngineer.getId()).toBe('id');
});

test('getEmail returns email', () => {
    expect(testEngineer.getEmail()).toBe('email');
});

test('getSchool returns school', () => {
    expect(testEngineer.getAttr()).toBe('github');
});

test('getRole returns role', () => {
    expect(testEngineer.getRole()).toBe(testRole);
});