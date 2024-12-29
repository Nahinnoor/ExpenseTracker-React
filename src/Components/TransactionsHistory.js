import React from "react";

export const TransactionsHistory = ({ transactions, onDeleteTransaction }) => {
  return (
    <div className="TransactionHistory">
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((transaction) => (
          <><li key={transaction.id}>
            {transaction.name}: ${transaction.amount.toFixed(2)}
          </li><button
            onClick={() => onDeleteTransaction(transaction.id)}
            style={{
              marginLeft: "10px",
              padding: "5px 10px",
              color: "white",
              backgroundColor: "red",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
              Delete
            </button></>
        ))}
      </ul>
    </div>
  );
};