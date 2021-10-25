const Manager = require('../lib/Manager');

test('creates an manger object', () => {
    // create a new Manager object
    const manager = new Manager('Ian', 1, 'concord511@gmail.com', 15);

    // create variables to hold values returned by Intern object's functions
    const manName = manager.getName();
    const manId = manager.getId();
    const manEmail = manager.getEmail();
    const manRole = manager.getRole();

    // results to expect
    expect(manName).toEqual(expect.any(String));
    expect(manId).toEqual(expect.any(Number));
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manEmail).toEqual(expect.any(String));
    expect(manRole).toEqual('Manager');
});