import { useQuery } from 'react-query';
import { getMovies } from "../api/movies-api";
import { getMovieRecommendations } from "../api/movies-api"; //importing the recommendations API.

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
                {movies.map(movie => ( //passing the movieID prop into the recommendations so it knows what movies to fetch.
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.overview}</p>
                        <p>Release Date: {movie.release_date}</p>
                        <Recommendations movieId={movie.id} />
                    </li>
                ))}
            </ul>
        </div>
    );

    return <div><h2>Movie Recommendations</h2>{moviesDisplay}</div>;
}

const Recommendations = ({ movieId }) => { //the recommendations function takes in the movieID from above.
    const { data: recommendationsData, error: recommendationsError, isLoading: recommendationsLoading, isError: recommendationsIsError } = useQuery(['recommendations', movieId], () => getMovieRecommendations(movieId));

    if (recommendationsLoading) {
        return <h2>Loading...</h2>
    }

    if (recommendationsIsError) {
        return <h2>{recommendationsError.message}</h2>
    }

    const recommendations = recommendationsData.results; //takes in the recommendations data and returns the results of it.

    return (
        <div>
            <h3>Recommendations</h3>
            <ul>
                {recommendations.map(recommendation => (
                    <li key={recommendation.id}>{recommendation.title}</li> //same process as the 'movies' mapping function.
                ))}
            </ul>
        </div>
    );
}

export default MoviesPage;