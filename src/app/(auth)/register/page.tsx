'use client'
import React, { useState } from 'react'

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegistrationPage = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      // Handle registration logic here
      console.log('Registering user with data:', formData);
    }
  };

  return (
    <div className='relative flex size-full min-h-screen flex-col bg-slate-50 justify-center items-center group/design-root overflow-x-hidden' 
         style={{fontFamily: '"Work Sans", "Noto Sans", sans-serif'}}>
      <div className='w-full max-w-[400px] px-4 md:px-0'>
        <form 
          onSubmit={handleSubmit} 
          className='bg-white rounded-xl shadow-lg p-6 md:p-8 w-full'
        >
          <h2 className='text-[#0c141d] text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] text-center mb-6'>
            Registration
          </h2>
          
          {error && (
            <p className='text-red-500 text-sm md:text-base mb-4 text-center'>
              {error}
            </p>
          )}

          <div className='mb-4'>
            <label 
              htmlFor="username" 
              className='block text-[#4573a1] text-sm md:text-base font-medium leading-normal mb-2'
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className='w-full px-4 py-2 rounded-xl border border-[#e6edf4] focus:outline-none focus:border-[#0066cc] text-[#0c141d] text-sm md:text-base bg-slate-50'
              placeholder='Enter your username'
            />
          </div>

          <div className='mb-4'>
            <label 
              htmlFor="email" 
              className='block text-[#4573a1] text-sm md:text-base font-medium leading-normal mb-2'
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='w-full px-4 py-2 rounded-xl border border-[#e6edf4] focus:outline-none focus:border-[#0066cc] text-[#0c141d] text-sm md:text-base bg-slate-50'
              placeholder='Enter your email'
            />
          </div>

          <div className='mb-4'>
            <label 
              htmlFor="password" 
              className='block text-[#4573a1] text-sm md:text-base font-medium leading-normal mb-2'
            >
              Password
            </label>
            <div className='relative'>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className='w-full px-4 py-2 rounded-xl border border-[#e6edf4] focus:outline-none focus:border-[#0066cc] text-[#0c141d] text-sm md:text-base bg-slate-50 pr-12'
                placeholder='Enter your password'
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-[#4573a1] hover:text-[#0066cc] focus:outline-none'
              >
                {showPassword ? (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-5 h-5"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" 
                    />
                  </svg>
                ) : (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-5 h-5"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" 
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className='mb-6'>
            <label 
              htmlFor="confirmPassword" 
              className='block text-[#4573a1] text-sm md:text-base font-medium leading-normal mb-2'
            >
              Confirm Password
            </label>
            <div className='relative'>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className='w-full px-4 py-2 rounded-xl border border-[#e6edf4] focus:outline-none focus:border-[#0066cc] text-[#0c141d] text-sm md:text-base bg-slate-50 pr-12'
                placeholder='Confirm your password'
              />
              <button 
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-[#4573a1] hover:text-[#0066cc] focus:outline-none'
              >
                {showConfirmPassword ? (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-5 h-5"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" 
                    />
                  </svg>
                ) : (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-5 h-5"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" 
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            className='w-full flex min-h-[44px] cursor-pointer items-center justify-center overflow-hidden rounded-xl px-4 bg-[#0066cc] text-slate-50 text-sm md:text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#0052a3] transition-colors'
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;