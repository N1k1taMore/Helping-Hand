import express from 'express';
import { acceptDonation } from '../controllers/donation.controller.js';
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post('/accept', verifyToken, acceptDonation);


export default router;
