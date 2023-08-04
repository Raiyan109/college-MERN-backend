const express = require('express')

const router = express.Router()

const { getLogin,
    createLogin,
} = require('../controllers/loginControllers');

// Get all parts
router.get('/', getLogin)

// Get a single part


// Create a new part
router.post('/', createLogin)

// Delete a single part


// Update a single part





module.exports = router