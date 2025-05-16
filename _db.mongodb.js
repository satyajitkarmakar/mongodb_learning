use('employees');


db.employee.insertOne({
    name: 'John Doe',
    age: 30,
    position: 'Software Engineer',
    department: 'Engineering',
    salary: 80000,
    hireDate: new Date('2020-01-15'),
    isActive: true,
    projects: [
        { name: 'Project A', startDate: new Date('2020-02-01'), endDate: new Date('2020-06-01') },
        { name: 'Project B', startDate: new Date('2021-03-01'), endDate: new Date('2021-09-01') }
    ]
});

db.employee.find();