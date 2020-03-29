import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";
export const Transaction = ({ transaction: { amount, text, _id } }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = amount < 0 ? "-" : "+";
  return (
    <div>
      <li className={amount < 0 ? "minus" : "plus"}>
        {text}{" "}
        <span>
          {sign}${numberWithCommas(Math.abs(amount))}
        </span>
        <button className="delete-btn" onClick={() => deleteTransaction(_id)}>
          X
        </button>
      </li>
    </div>
  );
};
