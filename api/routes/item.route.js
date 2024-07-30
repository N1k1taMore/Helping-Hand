import express from "express";
import { donate,getAllItems,deleteItem ,getdonationOnUserID} from "../controllers/item.controller.js";

const router = express.Router();

router.post("/donate", donate);
router.get("/getAllItems", getAllItems);
router.delete('/delete/:itemId', deleteItem);
router.get("/:userId",getdonationOnUserID);

export default router;