"use client"

import React, { useState } from 'react';

// SVG Icons as components
const User = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const LogIn = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
  </svg>
);

const UserPlus = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
  </svg>
);

const Home = () => (
  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

// Simulated API functions (in real Next.js, these would be in /pages/api/)
const api = {
  signup: async (data) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (users.find(u => u.email === data.email)) {
      throw new Error('User already exists');
    }
    
    const newUser = {
      id: Date.now(),
      name: data.name,
      email: data.email,
      password: data.password,
      createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    const { password, ...userWithoutPassword } = newUser;
    return { success: true, user: userWithoutPassword };
  },
  
  login: async (data) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    const user = users.find(u => u.email === data.email && u.password === data.password);
    
    if (!user) {
      throw new Error('Invalid credentials');
    }
    
    const token = btoa(JSON.stringify({ userId: user.id, exp: Date.now() + 3600000 }));
    const { password, ...userWithoutPassword } = user;
    
    return { success: true, token, user: userWithoutPassword };
  },
  
  getProfile: async (token) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (!token) {
      throw new Error('No token provided');
    }
    
    const decoded = JSON.parse(atob(token));
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    const user = users.find(u => u.id === decoded.userId);
    
    if (!user) {
      throw new Error('User not found');
    }
    
    const { password, ...userWithoutPassword } = user;
    return { success: true, user: userWithoutPassword };
  },
  
  updateProfile: async (token, data) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const decoded = JSON.parse(atob(token));
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    const userIndex = users.findIndex(u => u.id === decoded.userId);
    
    if (userIndex === -1) {
      throw new Error('User not found');
    }
    
    users[userIndex] = { ...users[userIndex], ...data };
    localStorage.setItem('users', JSON.stringify(users));
    
    const { password, ...userWithoutPassword } = users[userIndex];
    return { success: true, user: userWithoutPassword };
  }
};

export default function AuthApp() {
  const [view, setView] = useState('home');
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSignup = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await api.signup(formData);
      setSuccess('Account created successfully! Please login.');
      setFormData({ name: '', email: '', password: '' });
      setTimeout(() => setView('login'), 1500);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await api.login(formData);
      setToken(response.token);
      setUser(response.user);
      setSuccess('Login successful!');
      setFormData({ name: '', email: '', password: '' });
      setTimeout(() => setView('profile'), 1000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProfile = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await api.updateProfile(token, { name: formData.name });
      setUser(response.user);
      setSuccess('Profile updated successfully!');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    setFormData({ name: '', email: '', password: '' });
    setView('home');
    setSuccess('Logged out successfully!');
  };

  const loadProfile = async () => {
    setLoading(true);
    try {
      const response = await api.getProfile(token);
      setUser(response.user);
      setFormData({ ...formData, name: response.user.name });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (view === 'profile' && token) {
      loadProfile();
    }
  }, [view]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
            <h1 className="text-3xl font-bold text-center">Next.js Auth Demo</h1>
            <p className="text-center text-blue-100 mt-2">API Request/Response Example</p>
          </div>

          <div className="p-6">
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded">
                {error}
              </div>
            )}
            
            {success && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded">
                {success}
              </div>
            )}

            {view === 'home' && (
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <Home className="w-16 h-16 mx-auto text-indigo-600 mb-4" />
                  <h2 className="text-2xl font-semibold text-gray-800">Welcome!</h2>
                  <p className="text-gray-600 mt-2">Choose an action to get started</p>
                </div>
                
                <button
                  onClick={() => setView('signup')}
                  className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
                >
                  <UserPlus className="w-5 h-5" />
                  Sign Up
                </button>
                
                <button
                  onClick={() => setView('login')}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  <LogIn className="w-5 h-5" />
                  Login
                </button>
              </div>
            )}

            {view === 'signup' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                  <UserPlus className="w-6 h-6 text-indigo-600" />
                  Sign Up
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  
                  <button
                    onClick={handleSignup}
                    disabled={loading}
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
                  >
                    {loading ? 'Creating Account...' : 'Sign Up'}
                  </button>
                </div>
                
                <button
                  onClick={() => setView('home')}
                  className="w-full mt-4 text-gray-600 hover:text-gray-800"
                >
                  ← Back to Home
                </button>
              </div>
            )}

            {view === 'login' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                  <LogIn className="w-6 h-6 text-blue-600" />
                  Login
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <button
                    onClick={handleLogin}
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                  >
                    {loading ? 'Logging in...' : 'Login'}
                  </button>
                </div>
                
                <button
                  onClick={() => setView('home')}
                  className="w-full mt-4 text-gray-600 hover:text-gray-800"
                >
                  ← Back to Home
                </button>
              </div>
            )}

            {view === 'profile' && user && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                  <User className="w-6 h-6 text-green-600" />
                  Profile
                </h2>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="mb-3">
                    <span className="text-sm font-medium text-gray-600">User ID:</span>
                    <p className="text-gray-800">{user.id}</p>
                  </div>
                  <div className="mb-3">
                    <span className="text-sm font-medium text-gray-600">Email:</span>
                    <p className="text-gray-800">{user.email}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Member Since:</span>
                    <p className="text-gray-800">{new Date(user.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Update Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  
                  <button
                    onClick={handleUpdateProfile}
                    disabled={loading}
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
                  >
                    {loading ? 'Updating...' : 'Update Profile'}
                  </button>
                </div>
                
                <button
                  onClick={handleLogout}
                  className="w-full mt-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold text-gray-800 mb-2">API Endpoints Demo:</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• POST /api/auth/signup - Create new account</li>
            <li>• POST /api/auth/login - Authenticate user</li>
            <li>• GET /api/profile - Get user profile</li>
            <li>• PUT /api/profile - Update user profile</li>
          </ul>
        </div>
      </div>
    </div>
  );
}