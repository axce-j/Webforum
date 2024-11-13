'use client';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaUser, FaLock } from 'react-icons/fa';
import Link from 'next/link'; // Import Next.js Link component
import { useRouter } from 'next/navigation'; // Import Next.js router
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/config/FirebaseConfig';

const Page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter(); // Initialize router

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError('Email and Password are required');
    } else {
      try {
        const res = await signInWithEmailAndPassword(email, password);
        if (res && res.user) {
          // console.log("User UID:", res.user.uid);
          // console.log("User Email:", res.user.email);
          // console.log("Full user object:", res.user);

          setPassword('');
          setEmail('');
          router.push('/home');
        }
      } catch (error) {
        console.error("Login error:", error);
        setError('Login failed. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6b5b95] via-[#b3cde0] to-[#e6e6fa] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-[#f8f8ff] rounded-2xl shadow-xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-[#3d3c3c]">Welcome Back</h2>
            <p className="text-[#6b6b6b]">Please enter your details</p>
          </div>

          {error && (
            <div className="bg-[#ffefef] text-[#d9534f] p-3 rounded-lg text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#4b4b4b] mb-1">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-5 w-5 text-[#9a9a9a]" />
                  </div>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2.5 border border-[#cccccc] rounded-lg focus:ring-2 focus:ring-[#8a2be2] focus:border-[#8a2be2] transition-colors bg-[#f0f0f0] hover:bg-[#e6e6e6] focus:bg-white"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#4b4b4b] mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="h-5 w-5 text-[#9a9a9a]" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-10 py-2.5 border border-[#cccccc] rounded-lg focus:ring-2 focus:ring-[#8a2be2] focus:border-[#8a2be2] transition-colors bg-[#f0f0f0] hover:bg-[#e6e6e6] focus:bg-white"
                    placeholder="Enter your password"
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
            </div>

            <button
              type="submit"
              className="w-full bg-[#8a2be2] text-white py-2.5 rounded-lg font-medium hover:bg-[#5b4f91] focus:outline-none focus:ring-2 focus:ring-[#8a2be2] focus:ring-offset-2 transition-colors"
            >
              Sign in
            </button>

            <div className="text-center text-sm text-[#6b6b6b]">
              Not registered yet?{' '}
              <Link
                href="/register"
                className="text-[#8a2be2] hover:text-[#5b4f91] font-medium"
              >
                Create an account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
