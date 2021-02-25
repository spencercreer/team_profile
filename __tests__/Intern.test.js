const Intern = require('../lib/Intern');

const testIntern = new Intern('name', 'id', 'email', 'school');
const testRole = 'Intern';

test('getName returns name', () => {
    expect(testIntern.getName()).toBe('name');
});

test('getId returns id', () => {
    expect(testIntern.getId()).toBe('id');
});

test('getEmail returns email', () => {
    expect(testIntern.getEmail()).toBe('email');
});

test('getSchool returns school', () => {
    expect(testIntern.getSchool()).toBe('school');
});

test('getRole returns role', () => {
    expect(testIntern.getRole()).toBe(testRole);
});