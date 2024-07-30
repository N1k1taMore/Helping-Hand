import React, { useEffect, useState } from 'react';
import newRequest from '../../utils/newRequest';
import getCurrentUser from '../../utils/getCurrentUser';
import { useNavigate } from 'react-router-dom';
import './mydonation.scss';

function AllDonation() {
    const currentUser = getCurrentUser();
  const userId = currentUser._id;
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await newRequest.get(`/items/${userId}`);
        setItems(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchItems();
  }, []);

  const handleDelete = async (itemId) => {
    try {
      const updatedItems = items.filter((i) => i._id !== itemId);
      setItems(updatedItems);

      console.log(itemId);
      await newRequest.delete(`/items/delete/${itemId}`);
      alert('Deleted Successfully');
    } catch (err) {
      console.error('Error in Deletion:', err);
      alert('Error occured');
    }
    navigate('/');
  };

  return (
    <div className="ItemsList">
      <h1>Your Donations</h1>
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Items</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.username}</td>
              <td>{item.items}</td>
              <td>
                  <img
                    className="delete"
                    src="./img/delete.png"
                    alt=""
                    onClick={() => handleDelete(item._id)}
                  />
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllDonation;
