import React from 'react';
import MovieSessions from '../mockData/MovieSessions';
import FormatDate from '../utils/formatDate';
import SessionInfo from './SessionInfo';
import { CalendarIcon, StarIcon, MovieIcon } from './Icons';

const MovieCard = ({ movie, hallNumber }) => {
  const movieSessions = MovieSessions(movie, hallNumber);
  const ratingColor = movie.vote_average >= 7 ? 'text-green-500' : movie.vote_average >= 5 ? 'text-yellow-500' : 'text-red-500';

  return (
    <div className='bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group'>
      <div className='relative h-48 overflow-hidden'>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
          loading='lazy'
        />
        <div className='absolute top-2 right-2 flex items-center space-x-1 bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-1'>
          <StarIcon className={`w-3.5 h-3.5 ${ratingColor}`} />
          <span className='text-white text-xs font-bold'>{movie.vote_average.toFixed(1)}</span>
        </div>
      </div>
      <div className='p-4 flex-1 flex flex-col'>
        <h3 className='text-lg font-bold text-gray-800 mb-2 line-clamp-1'>{movie.title}</h3>
        <div className='flex items-center space-x-3 text-xs text-gray-500 mb-3'>
          <span className='flex items-center space-x-1'>
            <CalendarIcon className='w-3.5 h-3.5' />
            <span>{FormatDate(movie.release_date)}</span>
          </span>
          <span className='flex items-center space-x-1'>
            <MovieIcon className='w-3.5 h-3.5' />
            <span>Cinema</span>
          </span>
        </div>
        <div className='mt-auto'>
          <SessionInfo movieSessions={movieSessions} movieId={movie.id} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;