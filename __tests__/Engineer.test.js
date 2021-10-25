const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    // create a new Engineer object
    const engineer = new Engineer('Ian', 1, 'concord511@gmail.com');

    // create variables to hold values returned by Engineer object's functions
    const engName = engineer.getName();
    const engId = engineer.getId();
    const engEmail = engineer.getEmail();
    const engGithub = engineer.getGithub();
    const engRole = engineer.getRole();

    // results to expect
    expect(engName).toEqual(expect.any(String));
    expect(engId).toEqual(expect.any(Number));
    expect(engEmail).toEqual(expect.any(String));
    expect(engGithub).toEqual(expect.any(String));
    expect(engRole).toEqual('Engineer');
});