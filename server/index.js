require('dotenv').config()
const express = require('express');
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const path = require('path')


const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const app = express();
app.use(cors())
app.use(express.static(path.resolve(__dirname, 'img')))
app.use(express.json())
app.use('/api', router)


app.use(errorHandler)

const PORT = process.env.PORT;


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Connection enstablished. Server fwa started on port ${PORT}`))
    } catch(e){
        console.log(e)
    }
}

start()