import React, { useEffect, useState } from 'react';
import FetchMoviesByGenre from '../API/FetchMoviesByGenre';
import FetchMoviesBySearch from '../API/FetchMoviesBySearch';
import { isLoggedIn } from '../utils/Auth';
import Genres from './Genre';
import MovieCard from './MovieCard';
import RecommendedMovies from './RecommendedMovies';
import { HomeIcon, SpinnerIcon, MovieIcon } from './Icons';

const MovieList = ({ searchText }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [genreIds, setGenreIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const userLoggedIn = isLoggedIn();

  const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN || '';

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        if (searchText) {
          const response = await FetchMoviesBySearch(ACCESS_TOKEN, page, searchText);
          if (response) {
            setMovies(response.filteredMovies);
            setTotalPages(response.totalPages);
          }
        } else {
          const response = await FetchMoviesByGenre(ACCESS_TOKEN, page, genreIds);
          if (response) {
            setMovies(response.filteredMovies);
            setTotalPages(response.totalPages);
          }
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page, genreIds, searchText, ACCESS_TOKEN]);

  useEffect(() => {
    setPage(1);
  }, [searchText, genreIds]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className='container mx-auto px-4 py-6'>
      <div className='flex items-center space-x-2 mb-4'>
        <HomeIcon className='w-5 h-5 text-red-500' />
        <h1 className='text-2xl font-bold text-gray-800'>Now Showing</h1>
      </div>

      <Genres setGenreIds={setGenreIds} />

      {userLoggedIn && (
        <div className='mb-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100'>
          <RecommendedMovies />
        </div>
      )}

      {loading ? (
        <div className='flex justify-center items-center py-20'>
          <div className='flex flex-col items-center space-y-3'>
            <SpinnerIcon className='w-10 h-10 text-red-500' />
            <p className='text-gray-500 text-sm'>Loading movies...</p>
          </div>
        </div>
      ) : movies.length === 0 ? (
        <div className='text-center py-20'>
          <div className='inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4'>
            <MovieIcon className='w-8 h-8 text-gray-400' />
          </div>
          <p className='text-gray-500 text-lg'>No movies found</p>
          <p className='text-gray-400 text-sm mt-1'>Try adjusting your search or filters</p>
        </div>
      ) : (
        <>
          <div className='flex items-center justify-between mb-4'>
            <p className='text-sm text-gray-500'>
              Showing page {page} of {totalPages}
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {movies.map((movie, index) => (
              <MovieCard key={movie.id} movie={movie} hallNumber={index} />
            ))}
          </div>
          <div className='flex justify-center items-center space-x-4 mt-8'>
            <button
              onClick={handlePrevPage}
              className={`flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg ${
                page === 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={page === 1}
            >
              <svg className='w-4 h-4' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                <polyline points='15 18 9 12 15 6' />
              </svg>
              <span>Previous</span>
            </button>
            <div className='flex items-center space-x-2'>
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (page <= 3) {
                  pageNum = i + 1;
                } else if (page >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = page - 2 + i;
                }
                return (
                  <button
                    key={pageNum}
                    onClick={() => { setPage(pageNum); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className={`w-9 h-9 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      page === pageNum
                        ? 'bg-red-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
            <button
              onClick={handleNextPage}
              className={`flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg ${
                page === totalPages ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={page === totalPages}
            >
              <span>Next</span>
              <svg className='w-4 h-4' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                <polyline points='9 18 15 12 9 6' />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieList;