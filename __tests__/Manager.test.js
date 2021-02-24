const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('getRole should return Manager', () => {
    const testValue = "Manager";
    const x = new Manager("", );
    expect(getRole()).toBe(testValue);    
})