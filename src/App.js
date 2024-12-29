import "./App.css";
import React, { useState } from "react";
import { AddTransactions } from "./Components/AddTransactions";
import { BudgetOverview } from "./Components/BudgetOverview";
import { Categories } from "./Components/Categories";
import { Header } from "./Components/Header";
import { TotalExpense } from "./Components/TotalExpense";
import { TransactionsHistory } from "./Components/TransactionsHistory";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <div>
      <Header />
      <div className="content">
        <div className="box">
          <BudgetOverview />
          <TotalExpense />
        </div>
        <div className="box">
          <Categories />
        </div>
        <div className="box">
          <AddTransactions onAddTransaction={addTransaction} />
        </div>
        <div className="box">
          <TransactionsHistory
            transactions={transactions}
            onDeleteTransaction={deleteTransaction}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
