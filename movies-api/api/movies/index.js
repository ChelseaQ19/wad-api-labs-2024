import {getUpcomingMovies} from '../tmdb-api';
import {getGenres} from '../tmdb-api';
import { getTrendingMovies } from '../tmdb-api';
import { getMovieRecommendations } from '../tmdb-api';
import { getMovieReviews } from '../tmdb-api';
import { getMovieCredits } from '../tmdb-api';
import { getAccountDetails } from '../tmdb-api';
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

router.get('/tmdb/trending', asyncHandler(async (req, res) => { //get trending movies 
    const trending = await getTrendingMovies();
    res.status(200).json(trending);
}));

router.get('/tmdb/recommendations/:id', asyncHandler(async (req, res) => { //get recommended movies based on movie ID.
    const { id } = req.params; //extracts the movie ID from the request parameters, whichever one is requested.
    const recommendations = await getMovieRecommendations(id);
    res.status(200).json(recommendations);
}));

router.get('/tmdb/credits/:id', asyncHandler(async (req, res) => { //get recommended movies based on movie ID.
    const { id } = req.params; //extracts the movie ID from the request parameters, whichever one is requested.
    const credits = await getMovieCredits(id);
    res.status(200).json(credits);
}));

router.get('/tmdb/reviews/:id', asyncHandler(async (req, res) => { //get recommended movies based on movie ID.
    const { id } = req.params; //extracts the movie ID from the request parameters, whichever one is requested.
    const reviews = await getMovieReviews(id);
    res.status(200).json(reviews);
}));


router.get('/tmdb/account', asyncHandler(async (req, res) => { //get account details 
    const account = await getAccountDetails();
    res.status(200).json(account);
}));



export default router;