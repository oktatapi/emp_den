import User from './user.js';
import sequelize from '../database/database.js'
import Position from './position.js';
import Employee from './employee.js';

const db = {};

/* Import your models and write here. 
For example User: */
db.User = User;
db.Position = Position;
db.Employee = Employee;

// await sequelize.sync({ alter: true })

/*
Write the relationships between the models here.
*/

db.Employee.belongsTo(db.Position);
// db.Position.hasMany(db.Employee);

export default db;
