import { useState } from "react";
import PropTypes from "prop-types";

import Error from "../Error/Error";

import './Question.css';

function Question({setWeeklyBudget, setAvailableBudget, setShowQuestion}) {
    
    const [amount, setAmount] = useState(0);

    const [error, setError] = useState(false);
    

    function handleChange(event) {
        const {value} = event.target;
        setAmount(parseInt(value, 10));
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (amount < 1 || NaN) {
            setError(true);
            return;
        }

        setError(false);
        setWeeklyBudget(amount);
        setAvailableBudget(amount);
        setShowQuestion(false);
    }
    
    return(
        <div className="question-block">
            <h2>Whats your budget?</h2>
            {error ? <Error message="Invalid amount" /> : null}
            <form className="question-form" onSubmit={handleSubmit}>
                <input
                    type="number"
                    className="question-input"
                    placeholder="Insert your budget here"
                    onChange={handleChange}
                />
                <button className="question-button">Submit Budget</button>
            </form>
        </div>
    )
}

Question.propTypes = {
    setAvaliableBudget: PropTypes.func.isRequired,
    setWeeklyBudget: PropTypes.func.isRequired,
    setshowQuestion: PropTypes.func.isRequired
};

export default Question;

