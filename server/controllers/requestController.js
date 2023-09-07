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
}
module.exports = new requestController()