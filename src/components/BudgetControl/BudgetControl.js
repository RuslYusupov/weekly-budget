import './BudgetControl.css';

import { reviewBudget } from "../../helpers";

import PropTypes from "prop-types";

function BudgetControl( { weeklyBudget, availableBudget } ) {
    return(
        <div>
            <div className="total-budget">Budget: ${weeklyBudget}</div>
            <div className={reviewBudget(weeklyBudget, availableBudget)}>
                Money Left: ${availableBudget}
            </div>
        </div>
    )
}

BudgetControl.propTypes = {
    weeklyBudget: PropTypes.number.isRequired,
    avaliableBudget: PropTypes.number.isRequired
};

export default BudgetControl;