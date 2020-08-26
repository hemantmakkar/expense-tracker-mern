import React, { useContext } from "react";
import { GlobalContext } from '../contexts/GlobalState';

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <>
      <li className={sign === "-" ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button className="delete-btn" onClick={() => deleteTransaction(transaction._id)}>x</button>
      </li>
    </>
  );
};
