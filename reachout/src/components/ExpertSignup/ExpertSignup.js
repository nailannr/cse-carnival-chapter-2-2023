import React, { useState } from 'react';
import { auth } from '../firebase';

const ExpertSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [expertise, setExpertise] = useState('');

  const handleRegister = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      console.log('Doctor registered successfully!');
      // You can redirect the user to a dashboard or login page here.
    } catch (error) {
      console.error('Error registering doctor: ', error);
    }
  };

  return (
    <div>
      <h2>Expert Registration</h2>
      <form>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Field of Expertise:</label>
          <input
            type="text"
            value={expertise}
            onChange={(e) => setExpertise(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleRegister}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default ExpertSignup;