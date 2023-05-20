import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2020);
  const filterChangedHandler = (year) => {
    setFilteredYear(year);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear.toString();
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onFilterChange={filterChangedHandler}
          year={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
