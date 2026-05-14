import React, { useState } from 'react';
import Register from '../API/Register';

function RegistrationForm({ onClose }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:8080/api/v1';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!name || !surname || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const formData = { name, surname, email, password };
      const result = await Register(BASE_URL, formData);
      if (result) {
        setSuccess(true);
        setTimeout(() => {
          onClose();
        }, 1500);
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred during registration.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-xl font-semibold mb-4'>Register</h2>
      {error && (
        <p className='text-red-500 text-sm mb-2'>{error}</p>
      )}
      {success && (
        <p className='text-green-500 text-sm mb-2'>Registration successful! You can now log in.</p>
      )}
      <div className='mb-3'>
        <label className='block text-sm font-medium text-gray-700'>First Name</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border border-gray-300 rounded px-3 py-2 w-full'
          placeholder='Enter your first name'
          required
        />
      </div>
      <div className='mb-3'>
        <label className='block text-sm font-medium text-gray-700'>Last Name</label>
        <input
          type='text'
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          className='border border-gray-300 rounded px-3 py-2 w-full'
          placeholder='Enter your last name'
          required
        />
      </div>
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
          Register
        </button>
      </div>
    </form>
  );
}

export default RegistrationForm;