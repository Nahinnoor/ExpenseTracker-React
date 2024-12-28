import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { Transaction } from "./Transaction";
import { AddTransactions } from "./AddTransactions";

export const TransactionsList = () => {
  const { transaction } = useContext(GlobalContext);

  return (
    <div className="Transactions">
      <h2>Transaction History:</h2>
      <ul>
        {transaction.map((transaction, index) => (
          <li key={index}>
            {transaction.name}: ${transaction.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};
