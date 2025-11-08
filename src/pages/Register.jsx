import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // In a real app, you would post this data to your registration endpoint
    try {
        // SIMULATED REGISTRATION (No actual POST is made, as per your request)
        // If you wanted to POST:
        // const response = await api.post('/users', { name, email, password });
        
        setSuccess('Registration successful! You can now log in.');
        setTimeout(() => {
            navigate('/login');
        }, 1500);

    } catch (err) {
        console.error('Registration error:', err);
        setError('Registration failed. Please try again later.');
    }
  };
    return (
       <div className="flex items-center justify-center p-8 min-h-[70vh]">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
        <h2 className="text-4xl font-bold text-center text-teal-700 mb-6">Create Account 📝</h2>
        <p className="text-center text-gray-500 mb-8">
          Join our system for streamlined healthcare management.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Jane Doe"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="example@hms.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          {error && (
            <div className="text-sm text-center text-white bg-red-500 p-3 rounded-lg">
              {error}
            </div>
          )}
          {success && (
            <div className="text-sm text-center text-white bg-green-500 p-3 rounded-lg">
              {success}
            </div>
          )}

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150"
          >
            Register
          </button>
        </form>
        
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account? {' '}
          <Link to="/login" className="font-medium text-teal-600 hover:text-teal-500">
            Sign In
          </Link>
        </p>
      </div>
    </div>
    );
};

export default Register;