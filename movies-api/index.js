import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import profilesRouter from './api/profiles';
import usersRouter from './api/users';
import moviesRouter from './api/movies';   //import movies router
import authenticate from './authenticate';
import './db';
import defaultErrHandler from './errHandler'

dotenv.config();

const app = express();
const port = process.env.PORT; 

app.use(cors());
app.use(express.json());
app.use('/api/profiles', profilesRouter);
app.use('/api/users', usersRouter);
app.use('/api/movies', moviesRouter); //ADD THIS BEFORE THE DEFAULT ERROR HANDLER.
app.use('/api/movies',authenticate,  moviesRouter);
app.use(defaultErrHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});