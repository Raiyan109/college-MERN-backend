const mongoose = require('mongoose')

const Schema = mongoose.Schema

const candidateSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true })


module.exports = mongoose.model('Candidate', candidateSchema)