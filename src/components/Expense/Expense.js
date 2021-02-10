import './Expense.css';
import PropTypes from "prop-types";

function Expense({ expense }) {
    return(
        <li className="expense-element">
            <p className="expense-element-name">
            {expense.expenseType}
            <span className="expense-element-cost">$ {expense.expenseAmount}</span>
            </p>
        </li>
    )
}

Expense.propTypes = {
    expense: PropTypes.object.isRequired
};

export default Expense;