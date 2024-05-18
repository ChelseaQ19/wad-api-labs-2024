 # Assignment 2 - Web API.

Name: Chelsea Quigley

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 + Added new pages (trending, credits and recommendations)
 + Added two databases

## Setup requirements.

[No non-standard procedures]

## API Configuration

I created an .env file with the following: 

NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=mongodb://localhost:27017/movies_db
MONGO_DB=mongodb+srv://chelsea:monchiki101@movies.3mue7h1.mongodb.net/movies?retryWrites=true&w=majority&appName=movies
TMDB_KEY=a88912c55b78d67e79e6da9602d14e9c
SECRET=ilikecake
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies/tmdb/{movieID}/recommendations/{movieID} | GET | Gets a list of recommendations
- /api/movies/tmdb/{movieID)/credits/  | GET | Gets a list of credits per movie
- /api/movies/{movieid}/reviews | GET | Get all reviews for movie (fetched in POSTMAN but not on application)
- /api/profiles | POST | fetches profiles for database  

## Security and Authentication

Login and register authentication button.

## Integrating with React App

Described in email, misunderstood the purpose of the assignment and instead elaborated from the React labs given in assignment 2. New API features still implemented and labs all completed.

