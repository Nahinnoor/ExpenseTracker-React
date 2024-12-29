import React, { useState } from "react";

export const AddTransactions = ({ onAddTransaction }) => {
  {
    const [transactionName, setTransactionName] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!transactionName || !amount) return;

      const newTransaction = {
        id: Date.now(),
        name: transactionName,
        amount: parseFloat(amount),
      };

      // Clear input fields
      setText("");
      setAmount("");
    };
  }

  return (
    <div className="AddTransaction">
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Transaction Name</label>
          <input
            type="text"
            value={transactionName}
            onChange={(e) => setTransactionName(e.target.value)}
            placeholder="Enter Transaction Name"
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"
          />
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};
