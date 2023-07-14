const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        phone: { type: DataTypes.STRING },
        FIO: { type: DataTypes.STRING },
        login: { type: DataTypes.STRING, unique: true },
        password: { type: DataTypes.STRING },
        role: { type: DataTypes.STRING, defaultValue: 'USER' }
    })

const Doctor = sequelize.define('doctor',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
    })

User.hasOne(Doctor)
Doctor.belongsTo(User)

module.exports = {
    User,
    Doctor
}