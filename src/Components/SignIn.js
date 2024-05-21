import React from 'react'
import { useState } from 'react';
import "../Components/signin.css"
import { useNavigate } from 'react-router-dom';
export default function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('')
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    localStorage.setItem("token1",123)

    
    if (formData.email === storedEmail && formData.password === storedPassword) {
      alert('Login successful!');
      navigate("/home")
     
    } else {
      // alert('Invalid email or password');
      setError('Invalid email or password');
     
    }
    document.getElementById('Signup').reset();
  };

  return (
    
    
    <div className="container-fluid py-0 ">
    <div className="row justify-content-center signin">
      <div className="col-md-6">
        <div className="card" >
          <div className="card-body">
            <h2 className="card-title text-center">Sign In</h2>
            <form id="Signup" onSubmit={handleSubmit}>
              <div className="form-group my-2">
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
              </div>
              <div className="form-group my-2">
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" required />
              </div>
              {error && <p className="text-danger mt-3">{error}</p>}
              <button type="submit" className="btn btn-success btn-block mt-2">Sign In</button>
            </form>
          
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
