const Login = require('../models/loginModels')
const mongoose = require('mongoose');


// Get all parts
const getLogin = async (req, res) => {
    const login = await Login.find({}).sort({ createdAt: -1 })

    if (!login) {
        return res.status(404).json('No such login data')
    }
    res.status(200).json(login)
}

// Get a single part


// Create a new part
const createLogin = async (req, res) => {
    const { email, password } = req.body

    try {
        const login = await Login.create({
            email, password
        })
        res.status(200).json(login)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
// Delete a single part


// Update a single part



module.exports = {
    getLogin,
    createLogin,
}