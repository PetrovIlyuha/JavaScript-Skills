import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction: { amount, text, id } }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = amount < 0 ? "-" : "+";
  return (
    <div>
      <li className={amount < 0 ? "minus" : "plus"}>
        {text}{" "}
        <span>
          {sign}${Math.abs(amount)}
        </span>
        <button className="delete-btn" onClick={() => deleteTransaction(id)}>
          X
        </button>
      </li>
    </div>
  );
};
