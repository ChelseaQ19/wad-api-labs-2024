export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=a88912c55b78d67e79e6da9602d14e9c&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };