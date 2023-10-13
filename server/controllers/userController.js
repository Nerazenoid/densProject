const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models/models')
const { Op } = require('sequelize')
const { Sequelize } = require('../db')

const generateJwt = (id, login, role) => {
    return jwt.sign(
        { id, login, role },
        process.env.SECRET_KEY,
        { expiresIn: '30d' })
}

class UserController {
    async registration(req, res, next) {
        const { login, password, role, phone, fullname, birthday } = req.body
        if (!login || !password) {
            return next(ApiError.badRequest('Введите логин и пароль'))
        }
        const candidate = await User.findOne({ where: { login } })
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким логином уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({
            login,
            role,
            password: hashPassword,
            phone,
            firstName: fullname.firstName,
            lastName: fullname.lastName,
            patronymic: fullname.patronymic,
            birthday
        })
        const token = generateJwt(user.id, user.login, user.role)
        return res.json({ token })
    }

    async login(req, res, next) {
        const { login, password } = req.body
        const user = await User.findOne({ where: { login } })
        if (!user) {
            return next(ApiError.badRequest('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.badRequest('Пароль не верный'))
        }
        const token = generateJwt(user.id, user.login, user.role)
        return res.json({ token })
    }

    async check(req, res) {
        const token = generateJwt(req.user.id, req.user.login, req.user.role)
        return res.json({ token })
    }

    async getUsers(req, res) {

        let login = ''
        if (req.params.login) {
            login = req.params.login
        }

        const {page, limit} = req.query
        let offset = page * limit - limit

        const result = await User.findAndCountAll({
            offset,
            limit,
            attributes: ['id','login', 'phone', 'firstName', 'lastName', 'patronymic', 'createdAt', 'birthday'],
            where: {
                [Op.or]: [
                    {
                        login: {
                            [Op.like]: `%${login}%`
                        }
                    },
                    {
                        firstName: {
                            [Op.like]: `%${login}%`
                        }
                    },
                    {
                        lastName: {
                            [Op.like]: `%${login}%`
                        }
                    }
                ]
            }
        })

        res.json(result)
    }

    async getUserInfo(req, res) {
        const { login } = req.params

        const userInfo = await User.findOne({
            attributes: ['id', 'login', 'phone', 'firstName', 'lastName', 'patronymic', 'role', 'createdAt', 'birthday'],
            where: { login }
        })
        res.json(userInfo)
    }

    async addUser(req,res) {
        const {phone, fullname, birthday} = req.body
        const login = 'user' + new Date().getTime()
        await User.create({
            login,
            password: 'nonepass',
            phone,
            firstName: fullname.firstName,
            lastName: fullname.lastName,
            patronymic: fullname.patronymic,
            birthday
        })
        res.json(login)
    }
}

module.exports = new UserController()