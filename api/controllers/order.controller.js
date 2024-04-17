import createError from '../utils/createError.js';
import Order from '../models/order.model.js';
import Gig from '../models/gig.model.js';

export const createOrder = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);

    const newOrder = new Order({
      gigId: gig._id,
      img: gig.cover,
      title: gig.title,
      buyerId: req.userId,
      sellerId: gig.userId,
      price: gig.price,
      payment_intent: 'temporary',
    });

    await newOrder.save();
    res.status(200).send("Successfull")

  } catch (err) {
    next(err);
  }
};

export const getOrders = async (req, res, next) => {
  try {
    let filter = {};
    if (req.isSeller) {
      filter.sellerId = req.userId;
    } else {
      filter.buyerId = req.userId;
    }

    const orders = await Order.find(filter);
    if (!orders || orders.length === 0) {
      return next(createError(404, 'Orders not found!'));
    }
    res.status(200).send(orders);
  } catch (err) {
    next(err);
  }
  
};
