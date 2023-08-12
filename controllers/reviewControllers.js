const Review = require('../models/reviewModels')
const mongoose = require('mongoose');


// Get all parts
const getReviews = async (req, res) => {
    const review = await Review.find({}).sort({ createdAt: -1 })

    if (!review) {
        return res.status(404).json('No such reviews')
    }
    res.status(200).json(review)
}

// Get a single part


// Create a new part
const createReview = async (req, res) => {
    const { reviewText, rating } = req.body;

    try {
        const review = await Review.create({
            reviewText,
            rating
        });
        res.status(200).json(review);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a single part


// Update a single part



module.exports = {
    getReviews,
    createReview,
}