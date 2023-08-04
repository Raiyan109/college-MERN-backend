const express = require('express')

const router = express.Router()

const { getCandidate,
    createCandidate,
} = require('../controllers/candidateControllers');

// Get all parts
router.get('/', getCandidate)

// Get a single part


// Create a new part
router.post('/', createCandidate)

// Delete a single part


// Update a single part





module.exports = router