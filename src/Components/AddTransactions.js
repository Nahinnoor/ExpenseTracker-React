import React, { useState } from "react";

export const AddTransactions = () => {
  const [TransactionName, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (e) => {
    e.preventDefault(); // Prevent page reload

    if (TransactionName && amount) {
      // Add the new transaction to the list
      setTransactions([...transactions, { name: TransactionName, amount: parseFloat(amount) }]);

      // Clear input fields
      setText("");
      setAmount("");
    }

  };
  return (
    <div className="AddTransactions">
      <h3> Add Transaction </h3>
      <form onSubmit={handleAddTransaction}>
        <div className="form-control">
          <label htmlFor="text">
            {" "}
            Transaction <br />{" "}
          </label>
          <input
            type="text"
            value={TransactionName}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Text here..."
          ></input>
        </div>
        <div className="form-control">
          <label htmlFor="text">
            {" "}
            Amount <br />{" "}
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount..."
          ></input>
        </div>
      </form>
    </div>
  );
};
