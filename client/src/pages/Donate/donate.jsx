import React, { useState } from 'react';
import './donate.scss';
import newRequest from '../../utils/newRequest';
import { useNavigate } from 'react-router-dom';

function Donate() {
  const [item, setItem] = useState({
    username: '',
    email: '',
    address: '',
    items: '',
    phone: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setItem((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!item.address) {
      alert('Address is required.');
      return;
    }
    try {
      await newRequest.post('/items/donate', {
        ...item,
      });
      alert(
        'Thank you for choosing to make a difference through your donation. We appreciate your support more than words can express'
      );
      navigate('/mydonation');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="Donate">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Donation Details</h1>
          <label htmlFor="">Username</label>
          <input
            name="username"
            type="text"
            placeholder="johndoe"
            onChange={handleChange}
          />
          <label htmlFor="">Address</label>
          <input
            name="address"
            type="text"
            placeholder="Enter address"
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
          <label htmlFor="">Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="+1 234 567 89"
            onChange={handleChange}
          />
          <label htmlFor="">Donation</label>
          <input
            name="items"
            type="text"
            placeholder="Enter Donation items details"
            onChange={handleChange}
          />
          <button type="submit">Donate</button>
        </div>
      </form>
    </div>
  );
}

export default Donate;
