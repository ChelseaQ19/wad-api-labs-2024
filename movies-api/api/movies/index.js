import {getUpcomingMovies} from '../tmdb-api';
import {getGenres} from '../tmdb-api';
import {getTrendingMovies} from '../tmdb-api';
import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const movies = await movieModel.find();
    res.status(200).json(movies);
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get('/tmdb/genres', asyncHandler(async (req, res) => { //get movie genres
    const genres = await getGenres();
    res.status(200).json(genres);
}));

router.get('/tmdb/trending', asyncHandler(async (req, res) => { //get movie genres
    const trending = await getTrendingMovies();
    res.status(200).json(trending);
}));

export default router;