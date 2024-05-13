import { useQuery } from 'react-query';
import { getTrendingMovies } from "../api/movies-api";

const TrendingMoviesPage = () => {
    const { data, error, isLoading, isError } = useQuery('trendingMovies', getTrendingMovies);

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    const movies = data.results;
    const moviesDisplay = (
      <div>
            <ul> 
                {movies.map(movie => ( //adding movie id , title and overview in a list format.
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.overview}</p>
                        <p>Release Date: {movie.release_date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

    return <div><h2>Trending Movies</h2>{moviesDisplay}</div>


}
export default TrendingMoviesPage;