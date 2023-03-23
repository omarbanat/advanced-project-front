import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './register.css';
import { useNavigate } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    email: '',
    password: '',
    DOB: '',
    phoneNumber: '',
    gender: '',
    role: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('formdata ', formData);

    try {
      const response = await axios.post(`${API_URL}/register`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('response ', response.data);
      setErrorMessage('');
      navigate('/login');
    } catch (error) {
      console.error(error);
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem('token')) sessionStorage.removeItem('token');
  });

  return (
    <form onSubmit={handleSubmit} className="register_page">
      <div className="register_options">
        <div className="left-options">
          <label>
            First Name:
            <input
              type="text"
              name="fName"
              value={formData.fName}
              onChange={handleChange}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lName"
              value={formData.lName}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="right-options">
          <label>
            Date of Birth:
            <input
              type="date"
              name="DOB"
              value={formData.DOB}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </label>
          <label>
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label>
            Role:
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="">Select</option>
              <option value="admin">Admin</option>
              <option value="mentor">Mentor</option>
              <option value="student">Student</option>
            </select>
          </label>
        </div>
      </div>
      <button type="submit" className="register_button">
        Register
      </button>
      <p className="message">
        Already registered?{' '}
        <a href="#" onClick={() => navigate('/login')}>
          Sign In
        </a>
      </p>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </form>
  );
}

export default Register;
