import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import Search from './Search';
import { TicketIcon, UserIcon, LogoutIcon, LoginIcon, RegisterIcon } from './Icons';

function NavBar({ user, onSearch, onLogin, onLogout }) {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    onLogout();
  };

  return (
    <div>
      <nav className='navbar flex flex-col lg:flex-row container mx-auto py-3 bg-gradient-to-r from-red-600 to-red-500 rounded-lg relative z-10 shadow-lg'>
        <div className='flex items-center justify-between px-4'>
          <a
            className='flex items-center space-x-2 text-3xl font-bold text-white bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5 hover:bg-white/30 transition-all duration-200'
            href='/'
          >
            <TicketIcon className='w-8 h-8' />
            <span>Ticketify</span>
            <span className='text-2xl'>🍿</span>
          </a>
          <button
            className='lg:hidden text-white p-2 hover:bg-white/20 rounded-lg transition-colors'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label='Toggle menu'
          >
            <svg className='w-6 h-6' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
              {mobileMenuOpen ? (
                <line x1='18' x2='6' y1='6' y2='18' />
              ) : (
                <>
                  <line x1='3' x2='21' y1='6' y2='6' />
                  <line x1='3' x2='21' y1='12' y2='12' />
                  <line x1='3' x2='21' y1='18' y2='18' />
                </>
              )}
            </svg>
          </button>
        </div>
        <div className={`flex-grow lg:flex lg:justify-end items-center ${mobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <div className='flex flex-col lg:flex-row items-center gap-3 px-4 py-3 lg:py-0'>
            <Search onSearch={onSearch} />
            <div className='flex items-center space-x-2'>
              {user ? (
                <div className='flex items-center space-x-3'>
                  <div className='hidden sm:flex items-center space-x-1.5 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5'>
                    <UserIcon className='w-4 h-4 text-white' />
                    <span className='text-white text-sm font-medium'>{user.userName}</span>
                  </div>
                  <button
                    className='flex items-center space-x-1.5 bg-white text-red-500 hover:bg-red-50 hover:text-red-600 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md'
                    onClick={handleLogout}
                  >
                    <LogoutIcon className='w-4 h-4' />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <>
                  <button
                    className='flex items-center space-x-1.5 bg-white text-red-500 hover:bg-red-50 hover:text-red-600 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md'
                    onClick={() => setShowLoginForm(true)}
                  >
                    <LoginIcon className='w-4 h-4' />
                    <span>Login</span>
                  </button>
                  <button
                    className='flex items-center space-x-1.5 bg-red-700 text-white hover:bg-red-800 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md'
                    onClick={() => setShowRegistrationForm(true)}
                  >
                    <RegisterIcon className='w-4 h-4' />
                    <span>Register</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      {(showLoginForm || showRegistrationForm) && (
        <div className='fixed inset-0 flex justify-center items-center z-50 bg-gray-900/60 backdrop-blur-sm' onClick={() => { setShowLoginForm(false); setShowRegistrationForm(false); }}>
          <div className='bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md mx-4 transform transition-all' onClick={e => e.stopPropagation()}>
            <div className='flex justify-end'>
              <button
                onClick={() => { setShowLoginForm(false); setShowRegistrationForm(false); }}
                className='text-gray-400 hover:text-gray-600 transition-colors'
                aria-label='Close modal'
              >
                <svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                  <line x1='18' x2='6' y1='6' y2='18' />
                  <line x1='6' x2='18' y1='6' y2='18' />
                </svg>
              </button>
            </div>
            {showLoginForm && (
              <LoginForm
                onClose={() => setShowLoginForm(false)}
                onLogin={onLogin}
              />
            )}
            {showRegistrationForm && (
              <RegistrationForm
                onClose={() => setShowRegistrationForm(false)}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;