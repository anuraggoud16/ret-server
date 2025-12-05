import express from "express";
import { addExpense, getExpenseByUser, getByDate, getByMonth} from "../controllers/expenseControllers.js";


const router = express.Router();

router.post("/add", addExpense);
router.get("/getUserExpense/:userId", getExpenseByUser);
router.get("/by-date", getByDate);
router.get("/by-month", getByMonth);


export default router;