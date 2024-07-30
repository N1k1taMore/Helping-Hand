import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) return next(createError(401,"You are not authenticated!"))

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded; // Assuming decoded token contains user details
    next();
  } catch (err) {
    res.status(401).send('Invalid token');
  }
  

};
