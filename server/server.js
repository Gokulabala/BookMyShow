const express = require('express')

const app = express()

require('dotenv').config()
const dbConfig = require('./config/dbConfig')

const userRoute = require('./routes/userRoute')

app.use(express.json())
app.use('/', userRoute)

app.listen(8085,()=>{
    console.log("Server Started")
})
