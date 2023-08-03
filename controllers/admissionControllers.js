const Admission = require('../models/admissionModels')
const mongoose = require('mongoose');


// Get all parts
const getAdmission = async (req, res) => {
    const admission = await Admission.find({}).sort({ createdAt: -1 })

    if (!admission) {
        return res.status(404).json('No such admission data')
    }
    res.status(200).json(admission)
}

// Get a single part


// Create a new part
const createAdmission = async (req, res) => {
    const { name,
        subject,
        email,
        phone,
        address,
        dateOfBirth,
        image } = req.body

    try {
        const admission = await Admission.create({
            name,
            subject,
            email,
            phone,
            address,
            dateOfBirth,
            image
        })
        res.status(200).json(admission)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
// Delete a single part


// Update a single part



module.exports = {
    createAdmission,
    getAdmission,
}