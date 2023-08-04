const Candidate = require('../models/candidateModels')
const mongoose = require('mongoose');


// Get all parts
const getCandidate = async (req, res) => {
    const candidate = await Candidate.find({}).sort({ createdAt: -1 })

    if (!candidate) {
        return res.status(404).json('No such candidate data')
    }
    res.status(200).json(candidate)
}

// Get a single part


// Create a new part
const createCandidate = async (req, res) => {
    const { name,
        subject,
        email,
        phone,
        address,
        birthDate } = req.body

    try {
        const candidate = await Candidate.create({
            name,
            subject,
            email,
            phone,
            address,
            birthDate
        })
        res.status(200).json(candidate)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
// Delete a single part


// Update a single part



module.exports = {
    getCandidate,
    createCandidate,
}