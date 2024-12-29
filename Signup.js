import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase'; 

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState(null); // State for error handling
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      // Improved error handling with specific messages
      const response = await createUserWithEmailAndPassword(auth, email, password);
      setIsAuth(true);
      console.log('User created successfully:', response.user);
      navigate('/profile'); // Redirect to profile page after successful signup
    } catch (error) {
      // Display specific error messages based on error code
      setError(getErrorMessage(error.code)); // Function defined below
      console.error('Signup error:', error);
    }
  };

  // Function to map error codes to user-friendly messages (optional)
  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/weak-password':
        return 'Password is too weak. Please choose a stronger password.';
      case 'auth/email-already-in-use':
        return 'Email address is already in use. Please try a different email.';
      case 'auth/invalid-email':
        return 'Please enter a valid email address.';
      default:
        return 'An error occurred during signup. Please try again later.';
    }
  };

  return (
    <div>
      <h2>Sign Up</h2> {/* Add heading for clarity */}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="signin"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required // Add required attribute for validation
        />
        <input
          type="password"
          className="signin"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required // Add required attribute for validation
        />
        {error && <p className="error">{error}</p>} {/* Display error message */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;