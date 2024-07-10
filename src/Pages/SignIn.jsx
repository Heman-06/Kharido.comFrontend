import React, { useState } from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    if (!formData.name || !formData.phoneNumber || !formData.address || !formData.email || !formData.password) {
      alert("Fill all the fields");
    }

    alert(`Form Data:\nName: ${formData.name}\nPhone Number: ${formData.phoneNumber}\nAddress: ${formData.address}\nEmail: ${formData.email}\nPassword: ${formData.password}`);


    try {
      const response = await axios.post(`http://localhost:8081/user/signup`, formData);
      console.log('Response:', response.data);
      navigate('/login');
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className='lg1'></div>
      <div className='lg2'>
        <h2>Sign Up Form</h2><br />
        <form onSubmit={handleSubmit} >
          <input type='text' placeholder='Type Your Name' name='name' value={formData.name} onChange={handleChange} />
          <input type='text' placeholder='Phone-Number' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} />
          <input type='text' placeholder='Address' name='address' value={formData.address} onChange={handleChange} />
          <input type='text' placeholder='E-Mail' name='email' value={formData.email} onChange={handleChange} />
          <input type='text' placeholder='Password' name='password' value={formData.password} onChange={handleChange} />
          <button type='submit'>Submit</button>
        </form>
        <br />
        <Link to='/login' style={{ textDecoration: 'none' }}><p>Already a customer: Login</p></Link>
      </div>
    </>
  );
}

export default SignIn;
