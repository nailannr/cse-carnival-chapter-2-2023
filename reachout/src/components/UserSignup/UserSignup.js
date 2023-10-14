import React, { useState } from 'react';
import { auth } from '../firebase';

const UserSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');

  const handleRegister = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      console.log('User registered successfully!');
      // You can redirect the user to a dashboard or login page here.
    } catch (error) {
      console.error('Error registering user: ', error);
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
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
            <label>Date Of Birth:</label>
            <input 
            type="text"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            />
        </div>
        <div>
            <label>Gender:</label>
            <input
            type="text"
            value={gender}
            onChange={(e)=> setGender(e.target.value)}
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
        {/* <div>
          <label>Field of Expertise:</label>
          <input
            type="text"
            value={expertise}
            onChange={(e) => setExpertise(e.target.value)}
          />
        </div> */}
        <button type="button" onClick={handleRegister}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default UserSignup;