const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config()

const admissionRoutes = require('./routes/admission.js')


const app = express()

app.use(express.json())
app.use(cors())

app.use('/', admissionRoutes)



mongoose.set("strictQuery", false);
mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        app.listen(process.env.PORT, (req, res) => {
            console.log(`connected db & college-MERN server listening on ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })





