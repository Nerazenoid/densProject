require('dotenv').config()
const express = require('express');
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')

const app = express();

const PORT = process.env.PORT;

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Connection enstablished. Server started on port ${PORT}`))
    } catch(e){
        console.log(e)
    }
}

start()