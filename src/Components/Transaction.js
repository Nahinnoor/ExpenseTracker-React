import React from "react";

export const Transaction = ({transactions}) => {
  const sign = Transaction.amount
  return (
    <li className="minus"> {transactions.text} <span>400 </span> <button className="delete-btn">X</button> </li>
  );
};
