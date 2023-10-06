const Department = require('./Departments');
const Role = require('./Roles');
const Employee = require('./Employees');

Department.hasMany(Role, {
    foreignKey: 'department_id',
    onDelete: 'CASCADE'
});

Role.belongsTo(Department, {
    foreignKey: 'department_id'
});

Role.hasMany(Employee, {
    foreignKey: 'role_id',
    onDelete: 'CASCADE'
});

Employee.belongsTo(Role, {
    foreignKey: 'role_id'
});

Employee.belongsTo(Employee, {
    foreignKey: 'manager_id'
});

Employee.hasMany(Employee, {
    foreignKey: 'manager_id',
    onDelete: 'CASCADE'
});



module.exports = { Department, Role, Employee };