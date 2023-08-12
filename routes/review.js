const express = require('express')

const router = express.Router()

const { getReviews,
    createReview,
} = require('../controllers/reviewControllers');

// Get all parts
router.get('/', getReviews)

// Get a single part


// Create a new part
router.post('/', createReview)

// Delete a single part


// Update a single part





module.exports = router