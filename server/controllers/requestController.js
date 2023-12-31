const { Sequelize } = require("../db")
const { Request } = require("../models/models")

class requestController {
    async createRequest(req, res) {
        const {phone, fullname} = req.body
        await Request.create({
            phone,
            fullname,
        })
        res.send(true)
    }

    async getRequests(req, res) {
        const {page, limit} = req.query
        let offset = page * limit - limit
        const requests = await Request.findAndCountAll({
            offset,
            limit,
            attributes: ['id','phone','fullname','status','createdAt'],
            order: [
                Sequelize.literal("status='deny', status='complete', status='callback', status='inProgress'")
            ]
        })
        res.json(requests)
    }

    async getRequest(req,res) {
        const {id} = req.params
        const request = await Request.findByPk(id)
        res.json(request)
    }

    async updateRequest(req,res) {
        const {status, id} = req.body
        await Request.update({status}, {
            where: {
                id
            }
        })
        res.send(true)
    }
}
module.exports = new requestController()