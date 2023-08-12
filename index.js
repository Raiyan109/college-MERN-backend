const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config()

const admissionRoutes = require('./routes/admission.js')
const loginRoutes = require('./routes/login.js')
const candidateRoutes = require('./routes/candidate.js')
const reviewRoutes = require('./routes/review.js')


const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/admission', admissionRoutes)
app.use('/api/login', loginRoutes)
app.use('/api/candidate', candidateRoutes)
app.use('/api/review', reviewRoutes)



mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, (req, res) => {
            console.log(`connected db & college-MERN server listening on ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })





