// pages/api/login.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      const { username, password } = req.body;
  
      // Replace this with actual authentication logic
      if (username === 'admin' && password === 'password') {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }