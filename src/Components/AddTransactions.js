import React, { useState } from "react";

export const AddTransactions = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <div className="AddTransactions">
      <h3> Add Transaction </h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">
            {" "}
            Transaction <br />{" "}
          </label>
          <input
            type="text"
            value={text}
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
