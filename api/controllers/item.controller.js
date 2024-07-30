import Item from '../models/item.model.js';

export const donate = async (req, res, next) => {
  try {
    const newItem = new Item({
      ...req.body,
    });

    await newItem.save();
    res.status(201).send('Donation has been Done.');
  } catch (err) {
    next(err);
  }
};

export const getAllItems = async (req, res, next) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    next(err);
  }
};

export const deleteItem = async (req, res, next) => {
  const { itemId } = req.params;

  try {
    // Find the item by its ID and delete it
    const deletedItem = await Item.findById(itemId);

    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    await Item.findByIdAndDelete(itemId);
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (err) {
    console.error('Error deleting item:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
export const getdonationOnUserID = async (req, res, next) => {
  
  try {
    const donation = await Item.find({ userId: req.params.userId });
    if (!donation) next(createError(404, 'Donation not found!'));
    res.status(200).send(donation);
  } catch (err) {
    next(err);
  }
};

