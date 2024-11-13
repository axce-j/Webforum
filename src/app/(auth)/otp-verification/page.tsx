'use client'
import React, { useState } from 'react'

const OTPPage = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');

  const handleChange = (element, index) => {
    if (/[^0-9]/.test(element.value)) {
      setError('Please enter only numbers');
      return;
    }
    setError('');
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus the next input field
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.some(val => val === '')) {
      setError('Please enter the complete OTP');
    } else {
      setError('');
      const otpCode = otp.join('');
      // Handle OTP verification logic here
      console.log('Verifying OTP:', otpCode);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>OTP Verification</h2>
        {error && <p style={styles.error}>{error}</p>}
        <div style={styles.otpGroup}>
          {otp.map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={otp[index]}
              onChange={(e) => handleChange(e.target, index)}
              style={styles.otpInput}
            />
          ))}
        </div>
        <button type="submit" style={styles.button}>Verify OTP</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  form: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    width: '300px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '1rem',
    color: '#333',
  },
  error: {
    color: 'red',
    marginBottom: '1rem',
  },
  otpGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
  },
  otpInput: {
    width: '40px',
    height: '40px',
    textAlign: 'center',
    fontSize: '1.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default OTPPage;
