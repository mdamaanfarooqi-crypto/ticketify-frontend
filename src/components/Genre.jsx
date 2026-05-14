import React, { useEffect, useState, useCallback } from 'react';
import FetchGenres from '../API/GetGenres';
import RemoveUnwantedGenres from '../utils/removeNonCinemaGenres';
import { genreIcons } from './Icons';

const Genres = ({ setGenreIds }) => {
  const [genres, setGenres] = useState([]);
  const [clickedGenres, setClickedGenres] = useState([]);

  const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN || '';

  useEffect(() => {
    const fetchData = async () => {
      const fetchedGenres = await FetchGenres(ACCESS_TOKEN);
      const filteredGenres = RemoveUnwantedGenres(fetchedGenres);
      setGenres(filteredGenres);
      setClickedGenres(Array(filteredGenres.length).fill(false));
    };

    fetchData();
  }, [ACCESS_TOKEN]);

  useEffect(() => {
    const updatedGenreIds = clickedGenres
      .map((clicked, index) => (clicked ? genres[index].id : null))
      .filter((id) => id !== null);
    setGenreIds(updatedGenreIds);
  }, [clickedGenres, genres, setGenreIds]);

  const handleGenreClick = useCallback((index) => {
    setClickedGenres((prev) => {
      const newClickedGenres = [...prev];
      newClickedGenres[index] = !newClickedGenres[index];
      return newClickedGenres;
    });
  }, []);

  return (
    <div className='flex flex-wrap justify-center gap-2 mb-6'>
      {genres.map((genre, index) => {
        const genreInfo = genreIcons[genre.id];
        const IconComponent = genreInfo?.icon;
        const isActive = clickedGenres[index];

        return (
          <button
            key={genre.id}
            className={`inline-flex items-center space-x-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              isActive
                ? 'bg-red-600 text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow'
            }`}
            onClick={() => handleGenreClick(index)}
          >
            {IconComponent && (
              <IconComponent className={`w-4 h-4 ${isActive ? 'text-white' : 'text-red-500'}`} />
            )}
            <span>{genre.name}</span>
          </button>
        );
      })}
    </div>
  );
};

export default Genres;