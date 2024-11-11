'use client'
import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser, FaLock, FaEnvelope } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { auth } from '@/config/FirebaseConfig'
import { db } from '@/config/FirebaseConfig'
import { doc, setDoc } from 'firebase/firestore'

const Page = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('All fields are required');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    try {
      const res = await createUserWithEmailAndPassword(formData.email, formData.password);
      if (res && res.user) {
        // Create a user document in Firestore
        await setDoc(doc(db, "users", res.user.uid), {
          username: formData.username,
          email: res.user.email,
          createdAt: new Date(),
        });
        
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
        router.push('/login');
      }
    } catch (error) {
      setError('Registration failed. Please try again.');
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6b5b95] via-[#b3cde0] to-[#e6e6fa] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
            <p className="text-gray-500">Please fill in your details</p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {/* Username Input */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-[#4b4b4b] mb-1">
                  Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-5 w-5 text-[#9a9a9a]" />
                  </div>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-10 py-2.5 border border-[#cccccc] rounded-lg focus:ring-2 focus:ring-[#8a2be2] focus:border-[#8a2be2] transition-colors bg-[#f0f0f0] hover:bg-[#e6e6e6] focus:bg-white"
                    placeholder="Choose a username"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#4b4b4b] mb-1">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-[#9a9a9a]" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-10 py-2.5 border border-[#cccccc] rounded-lg focus:ring-2 focus:ring-[#8a2be2] focus:border-[#8a2be2] transition-colors bg-[#f0f0f0] hover:bg-[#e6e6e6] focus:bg-white"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#4b4b4b] mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="h-5 w-5 text-[#9a9a9a]" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-10 py-2.5 border border-[#cccccc] rounded-lg focus:ring-2 focus:ring-[#8a2be2] focus:border-[#8a2be2] transition-colors bg-[#f0f0f0] hover:bg-[#e6e6e6] focus:bg-white"
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="h-5 w-5 text-[#9a9a9a] hover:text-[#6b5b95]" />
                    ) : (
                      <FaEye className="h-5 w-5 text-[#9a9a9a] hover:text-[#6b5b95]" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password Input */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#4b4b4b] mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="h-5 w-5 text-[#9a9a9a]" />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-10 py-2.5 border border-[#cccccc] rounded-lg focus:ring-2 focus:ring-[#8a2be2] focus:border-[#8a2be2] transition-colors bg-[#f0f0f0] hover:bg-[#e6e6e6] focus:bg-white"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="h-5 w-5 text-[#9a9a9a] hover:text-[#6b5b95]" />
                    ) : (
                      <FaEye className="h-5 w-5 text-[#9a9a9a] hover:text-[#6b5b95]" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#8a2be2] text-white py-2.5 rounded-lg font-medium hover:bg-[#5b4f91] focus:outline-none focus:ring-2 focus:ring-[#8a2be2] focus:ring-offset-2 transition-colors"
            >
              Create Account
            </button>

            <div className="text-center text-sm text-[#6b6b6b]">
              Already have an account?{' '}
              <Link 
                href="/login" 
                className="text-[#8a2be2] hover:text-[#5b4f91] font-medium"
              >
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;