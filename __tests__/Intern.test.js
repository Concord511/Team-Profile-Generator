const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    // create a new Intern object
    const intern = new Intern('Ian', 1, 'concord511@gmail.com');

    // create variables to hold values returned by Intern object's functions
    const intName = intern.getName();
    const intId = intern.getId();
    const intEmail = intern.getEmail();
    const intSchool = intern.getSchool();
    const intRole = intern.getRole();

    // results to expect
    expect(intName).toEqual(expect.any(String));
    expect(intId).toEqual(expect.any(Number));
    expect(intEmail).toEqual(expect.any(String));
    expect(intSchool).toEqual(expect.any(String));
    expect(intRole).toEqual('Intern');
});