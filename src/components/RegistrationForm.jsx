import React, { useState } from 'react';
import Register from '../API/Register';
import { RegisterIcon, ErrorIcon, CheckIcon, SpinnerIcon } from './Icons';

function RegistrationForm({ onClose }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:8080/api/v1';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !surname.trim() || !email.trim() || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    try {
      const formData = { name: name.trim(), surname: surname.trim(), email: email.trim(), password };
      const result = await Register(BASE_URL, formData);
      if (result.success) {
        setSuccess(true);
        setTimeout(() => {
          onClose();
        }, 1500);
      } else {
        setError(result.error || 'Registration failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred during registration.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className='text-center py-8'>
        <div className='inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4'>
          <svg className='w-10 h-10 text-green-500' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
            <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' />
            <polyline points='22 4 12 14.01 9 11.01' />
          </svg>
        </div>
        <h2 className='text-2xl font-bold text-gray-800 mb-2'>Registration Successful!</h2>
        <p className='text-gray-500'>You can now log in with your credentials.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div className='text-center mb-6'>
        <div className='inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-3'>
          <RegisterIcon className='w-8 h-8 text-red-500' />
        </div>
        <h2 className='text-2xl font-bold text-gray-800'>Create Account</h2>
        <p className='text-sm text-gray-500 mt-1'>Join Ticketify today</p>
      </div>

      {error && (
        <div className='flex items-center space-x-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm'>
          <ErrorIcon className='w-4 h-4 flex-shrink-0' />
          <span>{error}</span>
        </div>
      )}

      <div className='grid grid-cols-2 gap-3'>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>First Name</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400'
            placeholder='First name'
            required
            autoFocus
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Last Name</label>
          <input
            type='text'
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className='w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400'
            placeholder='Last name'
            required
          />
        </div>
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400'
          placeholder='Enter your email'
          required
        />
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400'
          placeholder='Minimum 6 characters'
          required
          minLength={6}
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
              <span>Creating account...</span>
            </>
          ) : (
            <>
              <CheckIcon className='w-4 h-4' />
              <span>Register</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default RegistrationForm;