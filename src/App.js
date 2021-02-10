import { useState, useEffect } from "react";

import Question from './components/Question/Question';
import Form from './components/Form/Form';
import List from './components/List/List';
import BudgetControl from './components/BudgetControl/BudgetControl';

import './App.css';

function App() {
  
  const [weeklyBudget, setWeeklyBudget] = useState(0);

  const [availableBudget, setAvailableBudget] = useState(0);

  const [showQuestion, setShowQuestion] = useState(true);

  const [expenses, setExpenses] = useState([]);

  const [expense, setExpense] = useState({});

  const [createExpense, setCreateExpense] = useState(false);

  console.log(weeklyBudget);
  console.log(showQuestion);

  useEffect(() => {
    if (createExpense) {
      // add the new budget
      setExpenses([...expenses, expense]);

      // substract from budget
      const updatedAvailableBudget = availableBudget - expense.expenseAmount;
      setAvailableBudget(updatedAvailableBudget);
      // reset to false
      setCreateExpense(false);
    }
  }, [availableBudget, createExpense, expense, expenses]);


  return (
    <div className="main-container">
      <header>
        <h1>Weekly Budget</h1>
        <main>
          {
            showQuestion ? <Question setWeeklyBudget={setWeeklyBudget} setAvailableBudget={setAvailableBudget} setShowQuestion={setShowQuestion} /> 
            :
            <div className="row">
              <div className="one-half">
                <Form setExpense={setExpense} setCreateExpense={setCreateExpense} />
              </div>
              <div className="one-half one-half-right">
                 <List expenses={expenses} />
                <BudgetControl weeklyBudget={weeklyBudget} availableBudget={availableBudget} /> 
              </div>
            </div>
          }
        </main>
      </header>
    </div>
  );
}

export default App;
