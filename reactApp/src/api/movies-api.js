export const getMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getTrendingMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/trending', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getMovieRecommendations = async (id) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/recommendations/${id}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  );
  return response.json();
};

export const getSimilarMovies = async (id) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/similar/${id}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  );
  return response.json();
};

export const getMovieCredits = async (id) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/credits/${id}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  );
  return response.json();
};

export const getMovieReviews = async (id) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/reviews/${id}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  );
  return response.json();
};

  
export const login = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};

export const signup = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users?action=register', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};

//creating an API from the user profile Mongo schema
export const getProfiles = async (userId, fullName, dateOfBirth, bio) => {
  const response = await fetch('http://localhost:8080/api/profiles', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ user: userId, fullName, dateOfBirth, bio })
  });
  return response.json();
};
