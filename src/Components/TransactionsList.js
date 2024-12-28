import React from "react";

export const TransactionsList = ({ transaction }) => {
  return (
    <div>
          <div className="TransactionHistory">
        <h2>Transaction History:</h2>
        <ul>
          {transaction.map((transaction, index) => (
            <li key={index}>
              {transaction.name}: ${transaction.amount.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransactionsList;
