import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Position = sequelize.define('positions', {
    name: { type: DataTypes.STRING,  allowNull: false  }
}, {
    timestamps: true,
    freezeTableName: true
})

export default Position
