// SVG Icon Component Library
// Uses inline SVGs for consistent rendering across all platforms

export const TicketIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <path d='M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z' />
    <path d='M13 5v2' />
    <path d='M13 17v2' />
    <path d='M13 11v2' />
  </svg>
);

export const SearchIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <circle cx='11' cy='11' r='8' />
    <path d='m21 21-4.3-4.3' />
  </svg>
);

export const LoginIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <path d='M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4' />
    <polyline points='10 17 15 12 10 7' />
    <line x1='15' x2='3' y1='12' y2='12' />
  </svg>
);

export const LogoutIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' />
    <polyline points='16 17 21 12 16 7' />
    <line x1='21' x2='9' y1='12' y2='12' />
  </svg>
);

export const RegisterIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
    <circle cx='9' cy='7' r='4' />
    <line x1='19' x2='19' y1='8' y2='14' />
    <line x1='22' x2='16' y1='11' y2='11' />
  </svg>
);

export const UserIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' />
    <circle cx='12' cy='7' r='4' />
  </svg>
);

export const ClockIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <circle cx='12' cy='12' r='10' />
    <polyline points='12 6 12 12 16 14' />
  </svg>
);

export const CalendarIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <rect x='3' y='4' width='18' height='18' rx='2' ry='2' />
    <line x1='16' x2='16' y1='2' y2='6' />
    <line x1='8' x2='8' y1='2' y2='6' />
    <line x1='3' x2='21' y1='10' y2='10' />
  </svg>
);

export const StarIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox='0 0 24 24' fill='currentColor' stroke='currentColor' strokeWidth='1'>
    <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
  </svg>
);

export const StarOutlineIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
    <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
  </svg>
);

export const MovieIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <rect x='2' y='2' width='20' height='20' rx='2.18' ry='2.18' />
    <line x1='7' x2='7' y1='2' y2='22' />
    <line x1='17' x2='17' y1='2' y2='22' />
    <line x1='2' x2='22' y1='12' y2='12' />
    <line x1='2' x2='7' y1='7' y2='7' />
    <line x1='2' x2='7' y1='17' y2='17' />
    <line x1='17' x2='22' y1='17' y2='17' />
    <line x1='17' x2='22' y1='7' y2='7' />
  </svg>
);

export const LanguageIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <circle cx='12' cy='12' r='10' />
    <line x1='2' x2='22' y1='12' y2='12' />
    <path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' />
  </svg>
);

export const SeatIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox='0 0 24 24' fill='currentColor'>
    <path d='M4 18v3h3v-3h10v3h3v-3H4z' />
    <path d='M7 9v6h10V9H7z' />
    <path d='M20 10v2h2v-2h-2z' />
    <path d='M2 10v2h2v-2H2z' />
  </svg>
);

export const CloseIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <line x1='18' x2='6' y1='6' y2='18' />
    <line x1='6' x2='18' y1='6' y2='18' />
  </svg>
);

export const CheckIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <polyline points='20 6 9 17 4 12' />
  </svg>
);

export const ErrorIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <circle cx='12' cy='12' r='10' />
    <line x1='15' x2='9' y1='9' y2='15' />
    <line x1='9' x2='15' y1='9' y2='15' />
  </svg>
);

export const SpinnerIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={`animate-spin ${className}`} viewBox='0 0 24 24' fill='none'>
    <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
    <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
  </svg>
);

export const SuccessIcon = ({ className = 'w-12 h-12' }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' />
    <polyline points='22 4 12 14.01 9 11.01' />
  </svg>
);

export const HomeIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
    <polyline points='9 22 9 12 15 12 15 22' />
  </svg>
);

export const InfoIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <circle cx='12' cy='12' r='10' />
    <line x1='12' x2='12' y1='16' y2='12' />
    <line x1='12' x2='12.01' y1='8' y2='8' />
  </svg>
);

export const DollarIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <line x1='12' x2='12' y1='1' y2='23' />
    <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
  </svg>
);

export const ExternalLinkIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
    <polyline points='15 3 21 3 21 9' />
    <line x1='10' x2='21' y1='14' y2='3' />
  </svg>
);

// Genre SVG Icons
export const genreIcons = {
  28: {
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} viewBox='0 0 24 24' fill='currentColor'>
        <path d='M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z' />
        <path d='M10 9l6 3-6 3V9z' />
      </svg>
    ),
    label: 'Action'
  },
  12: {
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} viewBox='0 0 24 24' fill='currentColor'>
        <path d='M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7z' />
      </svg>
    ),
    label: 'Adventure'
  },
  16: {
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} viewBox='0 0 24 24' fill='currentColor'>
        <path d='M4 2h16v2H4zm2 4h12v2H6zm0 4h12v3c0 3.3-2.7 6-6 6s-6-2.7-6-6v-3z' />
      </svg>
    ),
    label: 'Animation'
  },
  35: {
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} viewBox='0 0 24 24' fill='currentColor'>
        <circle cx='12' cy='12' r='10' />
        <path d='M8 14s1.5 2 4 2 4-2 4-2' />
        <line x1='9' x2='9.01' y1='9' y2='9' />
        <line x1='15' x2='15.01' y1='9' y2='9' />
      </svg>
    ),
    label: 'Comedy'
  },
  10751: {
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} viewBox='0 0 24 24' fill='currentColor'>
        <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
      </svg>
    ),
    label: 'Family'
  },
  14: {
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} viewBox='0 0 24 24' fill='currentColor'>
        <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
      </svg>
    ),
    label: 'Fantasy'
  },
  9648: {
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} viewBox='0 0 24 24' fill='currentColor'>
        <circle cx='11' cy='11' r='7' />
        <path d='M21 21l-4.35-4.35' />
      </svg>
    ),
    label: 'Mystery'
  },
  878: {
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} viewBox='0 0 24 24' fill='currentColor'>
        <circle cx='12' cy='12' r='10' />
        <circle cx='12' cy='12' r='4' />
        <line x1='12' x2='12' y1='2' y2='6' />
        <line x1='12' x2='12' y1='18' y2='22' />
        <line x1='4.93' x2='7.76' y1='4.93' y2='7.76' />
        <line x1='16.24' x2='19.07' y1='16.24' y2='19.07' />
        <line x1='2' x2='6' y1='12' y2='12' />
        <line x1='18' x2='22' y1='12' y2='12' />
        <line x1='4.93' x2='7.76' y1='19.07' y2='16.24' />
        <line x1='16.24' x2='19.07' y1='7.76' y2='4.93' />
      </svg>
    ),
    label: 'Sci-Fi'
  },
  18: {
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} viewBox='0 0 24 24' fill='currentColor'>
        <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' />
      </svg>
    ),
    label: 'Drama'
  },
  27: {
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} viewBox='0 0 24 24' fill='currentColor'>
        <path d='M20 11H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2zm0 8H4v-6h16v6z' />
        <circle cx='12' cy='16' r='2' />
        <path d='M12 2C7.58 2 4 5.58 4 10h2c0-3.31 2.69-6 6-6s6 2.69 6 6h2c0-4.42-3.58-8-8-8z' />
      </svg>
    ),
    label: 'Horror'
  },
  53: {
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} viewBox='0 0 24 24' fill='currentColor'>
        <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
      </svg>
    ),
    label: 'Thriller'
  },
  10402: {
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} viewBox='0 0 24 24' fill='currentColor'>
        <path d='M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z' />
      </svg>
    ),
    label: 'Music'
  },
  36: {
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} viewBox='0 0 24 24' fill='currentColor'>
        <path d='M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z' />
      </svg>
    ),
    label: 'History'
  },
  10752: {
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} viewBox='0 0 24 24' fill='currentColor'>
        <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
      </svg>
    ),
    label: 'War'
  },
  10749: {
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} viewBox='0 0 24 24' fill='currentColor'>
        <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
      </svg>
    ),
    label: 'Romance'
  },
  80: {
    icon: ({ className = 'w-5 h-5' }) => (
      <svg className={className} viewBox='0 0 24 24' fill='currentColor'>
        <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z' />
      </svg>
    ),
    label: 'Crime'
  },
};

export default genreIcons;