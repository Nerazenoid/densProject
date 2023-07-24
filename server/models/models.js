const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        login: { type: DataTypes.STRING, unique: true },
        password: { type: DataTypes.STRING },
        phone: { type: DataTypes.STRING },
        firstName: { type: DataTypes.STRING },
        lastName: { type: DataTypes.STRING },
        patronymic: { type: DataTypes.STRING },
        role: { type: DataTypes.STRING, defaultValue: 'USER' }
    })

const Doctor = sequelize.define('doctor',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        speciality: { type: DataTypes.STRING }
    })

const Appointment = sequelize.define('appointment',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        date: { type: DataTypes.DATE }
    })

const Category = sequelize.define('category',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING }
    })

const Service = sequelize.define('service',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING },
        price: { type: DataTypes.INTEGER }
    })
const OrderService = sequelize.define('order_service',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        amount: {type: DataTypes.INTEGER}
    })

User.hasOne(Doctor)
Doctor.belongsTo(User)

User.hasMany(Appointment)
Appointment.belongsTo(User)

Doctor.hasMany(Appointment)
Appointment.belongsTo(Doctor)

Category.hasMany(Service)
Service.belongsTo(Category)

Appointment.hasMany(OrderService)
OrderService.belongsTo(Appointment)

Service.hasMany(OrderService)
OrderService.belongsTo(Service)

module.exports = {
    User,
    Doctor,
    Appointment,
    OrderService,
    Service,
    Category
}