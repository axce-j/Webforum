"use client";
import React, { useState, CSSProperties } from 'react';

const ForgottenPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would typically handle the form submission to your backend service
    // For example, you could use fetch or axios to send the email to your server
    // This is a placeholder for demonstration purposes
    setMessage('If an account with that email exists, you will receive a password reset link shortly.');
  };

  return (
    <div style={styles.container}>
      <h2>Forgotten Password</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Email:
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={styles.input}
          />
        </label>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

const styles : { [key: string]: CSSProperties } =  {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px'
  },
  label: {
    marginBottom: '10px',
    fontSize: '16px'
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  message: {
    marginTop: '20px',
    fontSize: '14px',
    color: 'green',
    textAlign: 'center'
  }
};

export default ForgottenPasswordPage;
