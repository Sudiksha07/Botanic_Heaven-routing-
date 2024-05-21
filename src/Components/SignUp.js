import React from 'react';
import "../Components/SignUp.css"
import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();
//   const history = useHistory();
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
    const handleSubmit = (e)=>{
        e.preventDefault(); // Prevent the form from submitting the traditional way


  
        
        localStorage.setItem('name', formData.name);
        localStorage.setItem('email', formData.email);
        localStorage.setItem('password', formData.password);
  
     
        alert('Signup successful! Your details have been saved.');
  
       
        document.getElementById('Signup').reset();
        // history.push('/signin');
        navigate("/signin")
    }
  return (
    <div className="Signup">
      <div class="signup-container">
    <h2 class="text-center">Signup</h2>
    <form id="Signup">
      <div class="form-group my-2">
        <label for="name">Name</label>
        <input type="text"  class="form-control" id="name" name="name" value={formData.name} onChange={handleChange}required/>
      </div>
      <div class="form-group my-2">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email"   value={formData.email} name="email" onChange={handleChange} required/>
      </div>
      <div class="form-group my-2">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password"  value={formData.password} onChange={handleChange} name="password" required/>
      </div>
      <button type="submit" class="btn btn-success btn-block mt-2" onClick={handleSubmit}>Signup</button>
    </form>
  </div>
    </div>
  )
}
