import React from 'react';
import { Link } from 'react-router-dom';
import { ClockIcon, LanguageIcon } from './Icons';

const SessionInfo = ({ movieSessions, movieId }) => {
  const handleSessionSelect = (session) => {
    localStorage.setItem('movieSession', JSON.stringify(session));
  };

  return (
    <Link to={`/movie/${movieId}`} className='block'>
      <ul className='space-y-1.5'>
        {movieSessions.slice(0, 3).map((session, index) => (
          <li key={index}>
            <button
              onClick={() => handleSessionSelect(session)}
              className='bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 w-full border border-red-400 rounded-lg text-left text-white text-xs font-semibold px-2.5 py-2 flex items-center space-x-3 transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]'
            >
              <ClockIcon className='w-3.5 h-3.5 flex-shrink-0' />
              <span className='font-mono'>{session.time}</span>
              <span className='flex items-center space-x-1 ml-auto bg-white/20 rounded px-1.5 py-0.5 text-[10px]'>
                <LanguageIcon className='w-3 h-3' />
                <span>{session.language}</span>
              </span>
            </button>
          </li>
        ))}
        {movieSessions.length > 3 && (
          <li className='text-center'>
            <span className='text-xs text-gray-400'>+{movieSessions.length - 3} more sessions</span>
          </li>
        )}
      </ul>
    </Link>
  );
};

export default SessionInfo;