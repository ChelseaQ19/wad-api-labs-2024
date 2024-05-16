import { useQuery } from 'react-query';
import { getMovies } from '../api/movies-api';
import { getMovieCredits } from '../api/movies-api';

const MoviesPage = () => {
    const { data: moviesData, error: moviesError, isLoading: moviesLoading, isError: moviesIsError } = useQuery('discover', getMovies);
    
    if (moviesLoading) {
        return <h1>Loading...</h1>
    }

    if (moviesIsError) {
        return <h1>{moviesError.message}</h1>
    }

    const movies = moviesData;

    const moviesDisplay = (
        <div>
            <ul> 
                {movies.map(movie => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.overview}</p>
                        <p>Release Date: {movie.release_date}</p>
                        <Credits movieId={movie.id} />
                    </li>
                ))}
            </ul>
        </div>
    );

    return <div><h2>Movie Credits</h2>{moviesDisplay}</div>;
}

const Credits = ({ movieId }) => {
    const { data: creditsData, error: creditsError, isLoading: creditsLoading, isError: creditsIsError } = useQuery(['credits', movieId], () => getMovieCredits(movieId));

    if (creditsLoading) {
        return <h2>Loading...</h2>
    }

    if (creditsIsError) {
        return <h2>{creditsError.message}</h2>
    }

    const credits = creditsData.crew;

    return (
        <div>
            <h3>Credits</h3>
            <ul>
                {credits.map(credit => (
                    <li key={credit.id}>{credit.name} - {credit.job}</li>
                ))}
            </ul>
        </div>
    );
}

export default MoviesPage;