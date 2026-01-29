import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Employee = sequelize.define('employees', {
    name: { type: DataTypes.STRING,  allowNull: false  },
    city: { type: DataTypes.STRING,  allowNull: true  },
    salary: { type: DataTypes.INTEGER,  allowNull: true  },
    positionId: { type: DataTypes.INTEGER, defaultValue: 0 },
}, {
    timestamps: true,
    freezeTableName: true
})

export default Employee
