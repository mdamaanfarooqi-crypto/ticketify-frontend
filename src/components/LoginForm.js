import React, { useState } from 'react';
import Login from '../API/Login';

function LoginForm({ onClose, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:8080/api/v1';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const userData = await Login(BASE_URL, email, password);
      if (userData && userData.message === 'Login successful') {
        onLogin({ userName: userData.userName, userId: userData.userId });
        onClose();
      } else {
        setError(userData?.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-xl font-semibold mb-4'>Login</h2>
      {error && (
        <p className='text-red-500 text-sm mb-2'>{error}</p>
      )}
      <div className='mb-3'>
        <label className='block text-sm font-medium text-gray-700'>Email</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='border border-gray-300 rounded px-3 py-2 w-full'
          placeholder='Enter your email'
          required
        />
      </div>
      <div className='mb-3'>
        <label className='block text-sm font-medium text-gray-700'>Password</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='border border-gray-300 rounded px-3 py-2 w-full'
          placeholder='Enter your password'
          required
        />
      </div>
      <div className='flex justify-end space-x-2 mt-4'>
        <button
          type='button'
          onClick={onClose}
          className='bg-gray-300 hover:bg-gray-400 text-gray-800 rounded px-4 py-2 text-sm font-semibold'
        >
          Cancel
        </button>
        <button
          type='submit'
          className='bg-red-500 hover:bg-red-700 text-white rounded px-4 py-2 text-sm font-semibold'
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;