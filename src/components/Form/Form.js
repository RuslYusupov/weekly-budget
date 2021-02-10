import { useState } from "react";

import { v4 as uuidv4 } from 'uuid'; // Библиотека для генерации случайного ID
import PropTypes from "prop-types";

import Error from "../Error/Error";

import './Form.css';

function Form( { setExpense, setCreateExpense } ) {
    
    const [expenseType, setExpenseType] = useState("");
    const [expenseAmount, setExpenseAmount] = useState(0);

    const [error, setError] = useState(false);

    console.log(expenseType);
    console.log(expenseAmount);



    function handleSubmit(event) {
        event.preventDefault();
        if (
            expenseAmount < 1 ||
            isNaN(expenseAmount) ||
            expenseType.trim() === ""
        ) {
            setError(true);
            return;
        }
        setError(false);

        const expense = {
            expenseType,
            expenseAmount,
            id: uuidv4()
        };

        setExpense(expense);
        setCreateExpense(true);

        setExpenseType("");
        setExpenseAmount(0);

    }
    
    return(
        <form onSubmit={handleSubmit}>
            <h2>Add your expenses</h2>
            {error ? <Error message="Invalid Input - Fill all fields" /> : null}

            <div className="add-expenses-block">
                <label>Type of expense</label>
                <input
                    type="text"
                    className="add-expenses-input"
                    placeholder="Eg. Groceries"
                    value={expenseType}
                    onChange={e => setExpenseType(e.target.value)}
                />
                <label>Amount</label>
                <input
                    type="number"
                    className="add-expenses-input"
                    placeholder="Eg. 300"
                    value={expenseAmount}
                    onChange={e => setExpenseAmount(parseInt(e.target.value))}
                />
            </div>

            <button className="add-expenses-button">Add Expense</button>
        </form>
    )
}

Form.propTypes = {
    setExpense: PropTypes.func.isRequired,
    setCreateExpense: PropTypes.func.isRequired
};

export default Form;