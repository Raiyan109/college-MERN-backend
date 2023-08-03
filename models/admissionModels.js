const mongoose = require('mongoose')

const Schema = mongoose.Schema

const admissionSchema = new Schema({
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
    },
    dateOfBirth: {
        type: Number,
    },
    image: {
        type: Number
    }
}, { timestamps: true })


module.exports = mongoose.model('Admission', admissionSchema)