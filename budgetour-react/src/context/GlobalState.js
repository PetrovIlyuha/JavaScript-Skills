import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// Initial state
const initialState = {
  transactions: [
    { id: 1, text: "Bakery", amount: -19 },
    { id: 2, text: "Mobile Phone Payment", amount: -10 },
    { id: 3, text: "Soft Drinks", amount: -11 },
    { id: 4, text: "Salary", amount: 300 }
  ]
};

// Creating context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions for reducer
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
