import express from 'express';
import Review from './reviewModel';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';

const router = express.Router(); 

// Get all reviews
router.get('/', asyncHandler(async (req, res) => {
    const reviews = await Review.find();
    res.status(200).json(reviews);
}));

// Fetch review by ID
router.get('/:id', asyncHandler(async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) {
            return res.status(404).json({ success: false, msg: 'Review not available.' });
        }
        res.status(200).json(review);
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Internal server error.' });
    }
}));

export default router;