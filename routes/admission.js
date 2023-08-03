const express = require('express')

const router = express.Router()

const { createAdmission,
    getAdmission
} = require('../controllers/admissionControllers');

// Get all parts
router.get('/', getAdmission)

// Get a single part


// Create a new part
router.post('/', createAdmission)

// Delete a single part


// Update a single part





module.exports = router