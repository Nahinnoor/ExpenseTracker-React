import React, { useState } from "react";

export const AddTransactions = () => {
  // State for form inputs
  const [transactionName, setTransactionName] = useState("");
  const [amount, setAmount] = useState(0);

  // State for the list of transactions
  const [transactions, setTransactions] = useState([]);

  // Handle input changes
  const handleTransactionNameChange = (e) => setTransactionName(e.target.value);
  const handleAmountChange = (e) => setAmount(e.target.value);

  // Handle form submission
  const handleAddTransaction = (e) => {
    e.preventDefault(); // Prevent page reload

    if (transactionName && amount) {
      // Add the new transaction to the list
      setTransactions([
        ...transactions,
        { name: transactionName, amount: parseFloat(amount) },
      ]);

      // Clear input fields
      setTransactionName("");
      setAmount("");
    }
  };
  return (
    <div>
      {/* Add Transaction Section */}
      <div className="AddTransaction">
        <h2>Add Transaction</h2>
        <form onSubmit={handleAddTransaction}>
          <div>
            <label>Transaction</label>
            <input
              type="text"
              placeholder="Enter Text here..."
              value={transactionName}
              onChange={handleTransactionNameChange}
            />
          </div>
          <div>
            <label>Amount</label>
            <input
              type="number"
              placeholder="0"
              value={amount}
              onChange={handleAmountChange}
            />
          </div>
          <button type="submit">Add Transaction</button>
        </form>
      </div>
    </div>
  );
};

export default AddTransactions
