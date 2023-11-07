import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Register: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const userData = {
        name: text,
        email: mail,
        password: password,
        address: address,
        phone: phone,
      };

      const response = await axios.post('http://localhost:8080/api/v1/auth/register', userData);

      toast.success(response.data.message);
      navigate('/login');
    } catch (error) {
      toast.error('Registration failed. Please try again.');
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="wrapper">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter your name"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter your email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create password"
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your Mobile No"
            required
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            required
          />
        </div>
        <div className="policy">
          <input type="checkbox" />
          <h3>I accept all terms & conditions</h3>
        </div>
        <div className="input-box button">
          <input type="Submit" defaultValue="Register Now" />
        </div>
        <div className="text">
          <h3>
            Already have an account? <Link to="/login">Login now</Link>
          </h3>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
