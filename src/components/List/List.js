import './List.css';
import Expense from "../Expense/Expense";
import PropTypes from "prop-types";

function List({ expenses }) {
    return(
        <div className="list-of-expenses-block">
            <h2>List of Expenses</h2>
            {expenses.map(expense => (
                <Expense expense={expense} key={expense.id} />
            ))}
        </div>
    )
}

List.propTypes = {
    expenses: PropTypes.array.isRequired
};

export default List;