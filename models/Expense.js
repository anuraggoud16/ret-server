import mongoose from "mongoose";
const expenseSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
    amount: {type: Number, require: true},
    category: {type: String, require: true},
    date: {type: String, require: true},
    note: {type: String}
})

const Expense = mongoose.model("Expense", expenseSchema, "expenses_data");

export default Expense;

