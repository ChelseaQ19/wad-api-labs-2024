import express from 'express';
import Profile from './profileModel';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Get all profiles-same method as 'Users' schema.
router.get('/', async (req, res) => {
    const profiles = await Profile.find();
    res.status(200).json(profiles);
});

// Fetch profile details by ID
router.get('/:id', async (req, res) => {
    try {
        const profile = await Profile.findById(req.params.id);
        if (!profile) {
            return res.status(404).json({ success: false, msg: 'Profile not found.' });
        }
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Internal server error.' });
    }
});

// Create a new profile
router.post('/', asyncHandler(async (req, res) => {
    try {
        const profile = await Profile.create(req.body);
        res.status(201).json({ success: true, msg: 'Profile successfully created.', profile });
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Internal server error.' });
    }
}));