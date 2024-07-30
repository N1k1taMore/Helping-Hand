import Donation from '../models/Donation.model.js';

export const acceptDonation = async (req, res, next) => {
  try {
    const { item } = req.body;
    const currentUser = req.user; 
    // console.log('Current user:', currentUser); 
    // console.log('Received item:', item); 
   

    if (!item || !item.username) {
      return res.status(400).send('Invalid item data.');
    }


    if (!currentUser || !currentUser.id) {
      return res.status(400).send('Invalid user data.');
    }

    const newDonation = new Donation({
      itemId: item._id,
      username: item.username,
      email: item.email,
      address: item.address,
      items: item.items,
      phone: item.phone,
      acceptedBy: currentUser.id,
    });

    await newDonation.save();
    res.status(201).send('Donation accepted successfully.');
  } catch (err) {
    next(err);
  }
};
