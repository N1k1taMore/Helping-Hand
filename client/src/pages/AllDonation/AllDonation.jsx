import React, { useEffect, useState } from 'react';
import newRequest from '../../utils/newRequest';
import { useNavigate } from 'react-router-dom';
import './AllDonation.scss';

function AllDonation() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await newRequest.get('/items/getAllItems');
        setItems(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchItems();
  }, []);

  const handleAccept = async (itemId, item) => {
    try {
      console.log('Accepting item:', item);
      await newRequest.post('/donation/accept', { item });

      const updatedItems = items.filter((i) => i._id !== itemId);
      setItems(updatedItems);

      console.log(itemId);
      await newRequest.delete(`/items/delete/${itemId}`);
      alert('Hope our Donation helps You');
    } catch (err) {
      console.error('Error in handleAccept:', err);
      alert('Error occured');
    }
    navigate('/');
  };

  return (
    <div className="ItemsList">
      <h1>Available Donations</h1>
      
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Items</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.address}</td>
              <td>{item.items}</td>
              <td>{item.phone}</td>
              <td>
                <button onClick={() => handleAccept(item._id, item)}>
                  Accept Donation
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllDonation;
