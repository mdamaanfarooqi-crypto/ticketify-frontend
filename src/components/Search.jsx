import React, { useState, useCallback } from 'react';
import { SearchIcon } from './Icons';

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleChange = useCallback((event) => {
    const searchText = event.target.value;
    setSearch(searchText);
    if (searchText.length === 0) {
      onSearch(searchText);
    }
  }, [onSearch]);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    if (search.trim()) {
      onSearch(search.trim());
    }
  }, [search, onSearch]);

  const handleClear = useCallback(() => {
    setSearch('');
    onSearch('');
  }, [onSearch]);

  return (
    <form onSubmit={handleSubmit} className='relative w-full max-w-md'>
      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
        <SearchIcon className='w-4 h-4 text-gray-400' />
      </div>
      <input
        type='text'
        placeholder='Search movies...'
        className='w-full pl-10 pr-20 py-2 border-2 border-red-400/50 bg-white/90 backdrop-blur-sm rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/30 transition-all duration-200'
        value={search}
        onChange={handleChange}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
      />
      <div className='absolute inset-y-0 right-0 flex items-center pr-1'>
        {search && (
          <button
            type='button'
            onClick={handleClear}
            className='p-1.5 text-gray-400 hover:text-gray-600 transition-colors'
            aria-label='Clear search'
          >
            <svg className='w-4 h-4' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
              <line x1='18' x2='6' y1='6' y2='18' />
              <line x1='6' x2='18' y1='6' y2='18' />
            </svg>
          </button>
        )}
        <button
          type='submit'
          className='bg-red-500 hover:bg-red-600 text-white rounded-md px-3 py-1.5 text-sm font-semibold transition-all duration-200 ml-1 shadow-sm hover:shadow-md'
          aria-label='Search'
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;