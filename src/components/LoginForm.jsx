import React, { useState } from 'react';
import Login from '../API/Login';
import { LoginIcon, ErrorIcon, SpinnerIcon } from './Icons';

function LoginForm({ onClose, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:8080/api/v1';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const userData = await Login(BASE_URL, email.trim(), password);
      if (userData && userData.message === 'Login successful') {
        onLogin({ userName: userData.userName, userId: userData.userId });
        onClose();
      } else {
        setError(userData?.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div className='text-center mb-6'>
        <div className='inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-3'>
          <LoginIcon className='w-8 h-8 text-red-500' />
        </div>
        <h2 className='text-2xl font-bold text-gray-800'>Welcome Back</h2>
        <p className='text-sm text-gray-500 mt-1'>Sign in to your account</p>
      </div>

      {error && (
        <div className='flex items-center space-x-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm'>
          <ErrorIcon className='w-4 h-4 flex-shrink-0' />
          <span>{error}</span>
        </div>
      )}

      <div>
        <label className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400'
          placeholder='Enter your email'
          required
          autoFocus
        />
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400'
          placeholder='Enter your password'
          required
        />
      </div>

      <div className='flex space-x-3 pt-2'>
        <button
          type='button'
          onClick={onClose}
          className='flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200'
          disabled={loading}
        >
          Cancel
        </button>
        <button
          type='submit'
          disabled={loading}
          className='flex-1 flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 text-white rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {loading ? (
            <>
              <SpinnerIcon className='w-4 h-4' />
              <span>Signing in...</span>
            </>
          ) : (
            <>
              <LoginIcon className='w-4 h-4' />
              <span>Sign In</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default LoginForm;